import { useState } from "react";
import { useLocation } from "wouter";
import { useAuth } from "@/hooks/use-auth";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { apiRequest, queryClient } from "@/lib/queryClient";
import { insertCarSchema } from "@shared/schema";
import { carMakes, carModels, carTypes } from "@/lib/car-types";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Loader2, Upload, Camera, Trash2 } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const MAX_IMAGES = 10;
const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];

const postAdSchema = insertCarSchema.extend({
  images: z
    .any()
    .refine((files) => files?.length >= 1, "At least one image is required")
    .refine(
      (files) => Array.from(files).every((file: File) => file.size <= MAX_FILE_SIZE),
      `Each file should be less than 5MB`
    )
    .refine(
      (files) =>
        Array.from(files).every((file: File) =>
          ACCEPTED_IMAGE_TYPES.includes(file.type)
        ),
      "Only .jpg, .jpeg, .png and .webp formats are supported"
    ),
});

type PostAdFormValues = z.infer<typeof postAdSchema>;

export default function PostAdPage() {
  const { user } = useAuth();
  const { toast } = useToast();
  const [, navigate] = useLocation();
  const [imageFiles, setImageFiles] = useState<File[]>([]);
  const [imagePreviewUrls, setImagePreviewUrls] = useState<string[]>([]);

  const form = useForm<PostAdFormValues>({
    resolver: zodResolver(postAdSchema),
    defaultValues: {
      sellerId: user?.id,
      title: "",
      description: "",
      price: 0,
      year: new Date().getFullYear(),
      make: "",
      model: "",
      trim: "",
      bodyType: "",
      mileage: 0,
      exteriorColor: "",
      interiorColor: "",
      fuelType: "Gasoline",
      transmission: "Automatic",
      drivetrain: "FWD",
      engine: "",
      vin: "",
      condition: "Used",
      features: [],
      sellerType: "Private Seller",
      location: "",
      images: undefined,
    },
  });

  const { mutate: postAd, isPending } = useMutation({
    mutationFn: async (values: PostAdFormValues) => {
      const formData = new FormData();
      
      // Append all car data
      Object.entries(values).forEach(([key, value]) => {
        if (key !== "images") {
          if (Array.isArray(value)) {
            formData.append(key, JSON.stringify(value));
          } else {
            formData.append(key, String(value));
          }
        }
      });
      
      // Append images
      if (imageFiles.length > 0) {
        imageFiles.forEach((file) => {
          formData.append("images", file);
        });
      }
      
      const res = await fetch("/api/cars", {
        method: "POST",
        body: formData,
        credentials: "include",
      });
      
      if (!res.ok) {
        const error = await res.text();
        throw new Error(error || "Failed to post ad");
      }
      
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/user/cars"] });
      toast({
        title: "Ad posted successfully",
        description: "Your car listing has been created",
      });
      navigate("/dashboard");
    },
    onError: (error) => {
      toast({
        title: "Failed to post ad",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;
    
    const newFiles = Array.from(files);
    if (imageFiles.length + newFiles.length > MAX_IMAGES) {
      toast({
        title: "Too many images",
        description: `You can upload a maximum of ${MAX_IMAGES} images`,
        variant: "destructive",
      });
      return;
    }
    
    const newPreviews: string[] = [];
    
    newFiles.forEach((file) => {
      const reader = new FileReader();
      reader.onload = () => {
        newPreviews.push(reader.result as string);
        if (newPreviews.length === newFiles.length) {
          setImageFiles([...imageFiles, ...newFiles]);
          setImagePreviewUrls([...imagePreviewUrls, ...newPreviews]);
          form.setValue("images", [...imageFiles, ...newFiles]);
        }
      };
      reader.readAsDataURL(file);
    });
  };

  const removeImage = (index: number) => {
    const newFiles = [...imageFiles];
    const newPreviews = [...imagePreviewUrls];
    newFiles.splice(index, 1);
    newPreviews.splice(index, 1);
    setImageFiles(newFiles);
    setImagePreviewUrls(newPreviews);
    form.setValue("images", newFiles);
  };

  function onSubmit(values: PostAdFormValues) {
    postAd(values);
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 bg-neutral-50 py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-2 font-montserrat">
            Post Your <span className="text-secondary">Car</span>
          </h1>
          <p className="text-neutral-600 mb-8">
            Fill out the form below to list your car on SheenCar
          </p>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Car Details</CardTitle>
                      <CardDescription>
                        Basic information about your car
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <FormField
                        control={form.control}
                        name="title"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Listing Title</FormLabel>
                            <FormControl>
                              <Input placeholder="e.g., 2020 Toyota Camry XSE in Excellent Condition" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <div className="grid grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="year"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Year</FormLabel>
                              <FormControl>
                                <Input
                                  type="number"
                                  min={1900}
                                  max={new Date().getFullYear() + 1}
                                  {...field}
                                  onChange={e => field.onChange(parseInt(e.target.value))}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="price"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Price ($)</FormLabel>
                              <FormControl>
                                <Input
                                  type="number"
                                  min={0}
                                  placeholder="0"
                                  {...field}
                                  onChange={e => field.onChange(parseInt(e.target.value))}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="make"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Make</FormLabel>
                              <Select
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                              >
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select Make" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  {carMakes.map((make) => (
                                    <SelectItem key={make.id} value={make.id}>
                                      {make.name}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="model"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Model</FormLabel>
                              <Select
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                                disabled={!form.watch("make")}
                              >
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder={form.watch("make") ? "Select Model" : "Select Make First"} />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  {carModels
                                    .filter(model => model.makeId === form.watch("make"))
                                    .map((model) => (
                                      <SelectItem key={model.id} value={model.id}>
                                        {model.name}
                                      </SelectItem>
                                    ))}
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="trim"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Trim</FormLabel>
                              <FormControl>
                                <Input placeholder="e.g., XSE, Sport, Limited" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="mileage"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Mileage</FormLabel>
                              <FormControl>
                                <Input
                                  type="number"
                                  min={0}
                                  placeholder="0"
                                  {...field}
                                  onChange={e => field.onChange(parseInt(e.target.value))}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Description</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Describe your car in detail - include condition, history, features, and any other relevant information"
                                className="resize-y min-h-[150px]"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Vehicle Specifications</CardTitle>
                      <CardDescription>
                        Detailed specifications of your vehicle
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="bodyType"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Body Type</FormLabel>
                              <Select
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                              >
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select Body Type" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  {carTypes.map((type) => (
                                    <SelectItem key={type.id} value={type.id}>
                                      {type.name}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="condition"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Condition</FormLabel>
                              <Select
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                              >
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select Condition" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="New">New</SelectItem>
                                  <SelectItem value="Used">Used</SelectItem>
                                  <SelectItem value="Certified Pre-Owned">Certified Pre-Owned</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="exteriorColor"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Exterior Color</FormLabel>
                              <FormControl>
                                <Input placeholder="e.g., Pearl White, Midnight Black" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="interiorColor"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Interior Color</FormLabel>
                              <FormControl>
                                <Input placeholder="e.g., Black Leather, Tan Cloth" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="fuelType"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Fuel Type</FormLabel>
                              <Select
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                              >
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select Fuel Type" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="Gasoline">Gasoline</SelectItem>
                                  <SelectItem value="Diesel">Diesel</SelectItem>
                                  <SelectItem value="Hybrid">Hybrid</SelectItem>
                                  <SelectItem value="Electric">Electric</SelectItem>
                                  <SelectItem value="Plug-in Hybrid">Plug-in Hybrid</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="transmission"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Transmission</FormLabel>
                              <Select
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                              >
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select Transmission" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="Automatic">Automatic</SelectItem>
                                  <SelectItem value="Manual">Manual</SelectItem>
                                  <SelectItem value="CVT">CVT</SelectItem>
                                  <SelectItem value="DCT">Dual Clutch (DCT)</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="drivetrain"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Drivetrain</FormLabel>
                              <Select
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                              >
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select Drivetrain" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="FWD">Front-Wheel Drive (FWD)</SelectItem>
                                  <SelectItem value="RWD">Rear-Wheel Drive (RWD)</SelectItem>
                                  <SelectItem value="AWD">All-Wheel Drive (AWD)</SelectItem>
                                  <SelectItem value="4WD">Four-Wheel Drive (4WD)</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="engine"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Engine</FormLabel>
                              <FormControl>
                                <Input placeholder="e.g., 2.5L 4-Cylinder, V6 3.5L" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <FormField
                        control={form.control}
                        name="vin"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>VIN</FormLabel>
                            <FormControl>
                              <Input placeholder="Vehicle Identification Number" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </CardContent>
                  </Card>
                </div>
                
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Photos</CardTitle>
                      <CardDescription>
                        Upload high-quality photos of your car (max 10)
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <FormField
                        control={form.control}
                        name="images"
                        render={({ field: { onChange, value, ...field } }) => (
                          <FormItem>
                            <FormControl>
                              <div className="space-y-4">
                                <div className="border-2 border-dashed border-neutral-300 rounded-lg p-6 text-center">
                                  <Camera className="h-10 w-10 text-neutral-400 mx-auto mb-4" />
                                  <p className="mb-2 text-sm text-neutral-500">
                                    Drag and drop images here, or click to browse
                                  </p>
                                  <Button
                                    type="button"
                                    variant="outline"
                                    onClick={() => document.getElementById("image-upload")?.click()}
                                  >
                                    <Upload className="h-4 w-4 mr-2" /> Browse Files
                                  </Button>
                                  <input
                                    id="image-upload"
                                    type="file"
                                    multiple
                                    accept=".jpg,.jpeg,.png,.webp"
                                    className="hidden"
                                    onChange={handleImageUpload}
                                    {...field}
                                  />
                                </div>
                                
                                {imagePreviewUrls.length > 0 && (
                                  <div className="grid grid-cols-2 gap-4">
                                    {imagePreviewUrls.map((url, index) => (
                                      <div key={index} className="relative">
                                        <img
                                          src={url}
                                          alt={`Preview ${index + 1}`}
                                          className="w-full h-24 object-cover rounded-md"
                                        />
                                        <Button
                                          type="button"
                                          variant="destructive"
                                          size="icon"
                                          className="absolute top-1 right-1 h-6 w-6"
                                          onClick={() => removeImage(index)}
                                        >
                                          <Trash2 className="h-3 w-3" />
                                        </Button>
                                      </div>
                                    ))}
                                  </div>
                                )}
                              </div>
                            </FormControl>
                            <FormDescription>
                              Upload at least one photo of your car. First image will be the cover.
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Seller Information</CardTitle>
                      <CardDescription>
                        Your contact information for buyers
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <FormField
                        control={form.control}
                        name="sellerType"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Seller Type</FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select Seller Type" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="Private Seller">Private Seller</SelectItem>
                                <SelectItem value="Dealer">Dealer</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="location"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Location</FormLabel>
                            <FormControl>
                              <Input placeholder="City, State or ZIP Code" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </CardContent>
                  </Card>
                  
                  <Button type="submit" className="w-full" disabled={isPending}>
                    {isPending ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Posting Ad...
                      </>
                    ) : (
                      "Post Ad"
                    )}
                  </Button>
                </div>
              </div>
            </form>
          </Form>
        </div>
      </main>
      <Footer />
    </div>
  );
}
