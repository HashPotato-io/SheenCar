import { Switch, Route } from "wouter";
import  { useState, useEffect } from "react";
import HomePage from "@/pages/home-page";
import Account from "@/pages/account-page";
import AuthPage from "@/pages/auth-page";
import SearchPage from "@/pages/search-page";
import NewCarsPage from "@/pages/new-cars-page";
import UsedCars from "@/pages/used-cars";
import DealerCarDetailsPage from "@/pages/car-dealer-details-page";
import ComparePage from "@/pages/compare-page";
import SecurityPage from "@/pages/security-page";
import AboutPage from "@/pages/about-page";
import TeamPage from "@/pages/team-page";
import FindDealersPage from "@/pages/find-dealers-page";
import DealerProfilePage from "@/pages/dealer-profile-page";
import DealerCarsPage from "@/pages/dealer-cars-page";
import TradeCarDetailsPage from "@/pages/car-trade-details-page";
import TradeCar from "@/pages/trade-car";
import SignupPage from "@/pages/signup-page";
import ForgotPasswordPage from "@/pages/forgot-password-page";
import CheckoutPage from '@/pages/CheckoutPage';
import PostAdPage from "@/pages/post-ad-page";
import FAQPage from "@/pages/faq-page";
import FeaturedCars from "@/pages/featured-cars-pafe";
import PressPage from "@/pages/press-page";
import FraudPage from "@/pages/fraud-page";
import AdvertisePage from "@/pages/advertise-page";
import ContactPage from "@/pages/contact-page";
import ChatPage from "@/pages/chat-page";
import NotificationPage from "@/pages/notification-page";
import DeliveryPage from "@/pages/delivery-page";
import VisitorAgreement from "@/pages/visitor-page";
import TermsConditions from "@/pages/terms-condition";
import Privacy from "@/pages/privacy";
import {useMobileDevice} from "@/hooks/useMobileDevice";
import MobileChat from "@/components/chat/mobileChat";
export function UserRoutes() {
 const [isMobile, setIsMobile] = useState(false);

  // Check if it's mobile on initial load and on resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768); // 1023px is the breakpoint for mobile
    };

    // Initial check
    checkMobile();

    // Event listener for resize
    window.addEventListener('resize', checkMobile);

    // Cleanup the event listener
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Optionally, you can show a loading spinner while the screen size is being determined
  if (isMobile === null) {
    return null; // Or a loading spinner
  }

  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/account" component={Account} />
      <Route path="/auth" component={AuthPage} />
      <Route path="/search" component={SearchPage} />
      <Route path="/new-cars" component={NewCarsPage} />
      <Route path="/used-cars" component={UsedCars} />
      <Route path="/featured-cars" component={FeaturedCars} />
      <Route path="/cars/:id" component={DealerCarDetailsPage} />
      <Route path="/compare" component={ComparePage} />
      <Route path="/security" component={SecurityPage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/team" component={TeamPage} />
      <Route path="/services/dealer" component={FindDealersPage} />
      <Route path="/services/dealer/:dealerId" component={DealerProfilePage} />
      <Route path="/services/dealer/:dealerId/cars" component={DealerCarsPage} />
      <Route path="/services/dealer/:dealerId/cars/:id" component={DealerCarDetailsPage} />
      <Route path="/trade-car/sellers/:sellerId/cars/:id" component={TradeCarDetailsPage} />
      <Route path="/trade-car" component={TradeCar} />
      <Route path="/signup" component={SignupPage} />
      <Route path="/login" component={AuthPage} />
      <Route path="/forgot-password" component={ForgotPasswordPage} />
      <Route path="/checkout" component={CheckoutPage} />
      <Route path="/post-ad" component={PostAdPage} />
      <Route path="/faq" component={FAQPage} />
      <Route path="/press" component={PressPage} />
      <Route path="/fraud" component={FraudPage} />
      <Route path="/advertise" component={AdvertisePage} />
      <Route path="/contact" component={ContactPage} />
      {isMobile
        ? <Route path="/chat" component={MobileChat} />
        : <Route path="/chat" component={ChatPage} />
      }
      <Route path="/chat/:chatId" component={ChatPage} />
      <Route path="/notifications" component={NotificationPage} />
      <Route path="/delivery" component={DeliveryPage} />
      <Route path="/visitor" component={VisitorAgreement} />
      <Route path="/terms-condition" component={TermsConditions} />
      <Route path="/privacy" component={Privacy} />
    </Switch>
  );
}