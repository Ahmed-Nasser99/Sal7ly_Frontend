import React, { useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogActions,
  Button,
  Card,
  CardContent,
  Typography,
  Link,
} from "@mui/material";
import {
  LocalPhone as LocalPhoneIcon,
  Email,
  WhatsApp,
  Phone,
  LocationCity,
} from "@mui/icons-material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation, Pagination, Virtual } from "swiper/modules";
import LanguageSwitcher from "./LanguageSwitcher.jsx";
import { useTranslation } from "react-i18next";
import homeImageBackground from "./assets/Imgs/appliancesGroupHomeBackground.png";
import Logo from "./assets/Imgs/Logo.png";
import { brandData } from "./Brands.jsx";
import { servicesData } from "./Services.jsx";
import { testimonialsData } from "./Testimonials.jsx";

export default function MainComponent() {
  const [open, setOpen] = React.useState(true);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const { t, i18n } = useTranslation();
  useEffect(() => {
    document.body.dir = i18n.language === "ar" ? "rtl" : "ltr";
  }, [i18n.language]);

  const phoneNumber = "01102941029";
  const email = "ahmednasserr86@gmail.com";
  const location = "٢ شارع اليمني - أرض اللواء - حي العجوزة - محافظة الجيزة";
  var brands = brandData;
  var services = servicesData;
  var testimonials = testimonialsData;

  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 py-4 lg:px-6 h-14 flex items-center justify-between w-[95%] mx-auto fixed top-0 left-0 right-0 z-50 rounded-b-lg bg-background shadow-md overflow-hidden">
        <Link href="#" className="flex items-center gap-2">
          <div className="w-[150px] h-[90px] pt-2">
            <img src={Logo} alt="Logo" className="w-full h-full" />
          </div>
        </Link>
        <div className="flex gap-4 items-center">
          <div className="flex items-center gap-4">
            <a href={`tel:${phoneNumber}`} className="flex items-center gap-1">
              <Phone className="w-5 h-5 text-green-500" />
              <span className="hidden sm:inline">{phoneNumber}</span>
            </a>
            <Link
              href={`https://wa.me/${phoneNumber}`}
              className="flex items-center gap-3"
            >
              <WhatsApp className="w-5 h-5 text-green-500" />
              <span className="hidden sm:inline">{t("whatsapp")}</span>
            </Link>
          </div>
          <div className="ml-4">
            <LanguageSwitcher />
          </div>
        </div>
      </header>

      <Dialog open={open} onClose={handleClose}>
        <DialogContent className="sm:max-w-[425px]">
          <div className="flex flex-col items-center justify-center gap-4 py-8">
            <LocalPhoneIcon
              className="size-24 text-green-500"
              style={{ width: "3rem", height: "3rem" }}
            />
            <Typography
              variant="body1"
              className="text-lg font-medium text-center"
            >
              {t("call_us_at")}{" "}
              <a href={`tel:${phoneNumber}`} className="font-bold">
                {phoneNumber}
              </a>{" "}
              {t("or_chat")} {t("on")} {t("whatsapp")}
            </Typography>
            <div className="flex gap-2">
              <Button
                variant="outlined"
                startIcon={<LocalPhoneIcon className="text-green-500 mx-2" />}
              >
                <a href={`tel:${phoneNumber}`}>{t("call")}</a>
              </Button>
              <Button
                variant="outlined"
                startIcon={<WhatsApp className="text-green-500 mx-2" />}
                component="a"
                href={`https://wa.me/${phoneNumber}`}
              >
                {t("whatsapp")}
              </Button>
            </div>
          </div>
          <DialogActions>
            <Button autoFocus onClick={handleClose}>
              {t("close")}
            </Button>
          </DialogActions>
        </DialogContent>
      </Dialog>

      <section className="w-full py-16 md:pt-10 md:pb-6 lg:pt-16 lg:pb-8 h-screen">
        <div className="container mx-auto px-2 md:px-4 grid gap-3 lg:grid-cols-2 xl:grid-cols-2 w-full h-full">
          <img
            src={homeImageBackground}
            alt="Hero"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-bottom sm:w-full lg:order-last lg:aspect-square bg-gray-400 h-full"
          />
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <Typography
                variant="p"
                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl"
              >
                {t("main_title")}
              </Typography>
              <Typography
                variant="body1"
                className="max-w-[600px] text-muted-foreground md:text-xl"
              >
                {t("main_description")}
              </Typography>
            </div>
            <div className="flex flex-col justify-center gap-2 sm:flex-row">
              <Button
                variant="contained"
                color="success"
                startIcon={<LocalPhoneIcon className="mx-2" />}
                component="a"
                href={`tel:${phoneNumber}`}
              >
                {t("call_us")}
              </Button>
              <Button
                variant="outlined"
                startIcon={<WhatsApp className="text-green-500 mx-2" />}
                component="a"
                href={`https://wa.me/${phoneNumber}`}
              >
                {t("whatsapp")}
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 max-w-[95vw] mx-auto">
        <div className="container mx-auto px-4 md:px-6 space-y-12">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <Typography
                variant="h2"
                className="text-3xl font-bold tracking-tighter sm:text-5xl"
              >
                {t("our_services")}
              </Typography>
              <Typography
                variant="body1"
                className="text-muted-foreground md:text-xl lg:text-base xl:text-xl"
              >
                {t("services_description")}
              </Typography>
            </div>
          </div>
          <div>
            <Swiper
              modules={[Navigation, Pagination, Virtual]}
              slidesPerView={4}
              spaceBetween={30}
              loop
              autoplay={{
                delay: 100,
              }}
              breakpoints={{
                320: { slidesPerView: 1, spaceBetween: 10 },
                480: { slidesPerView: 1, spaceBetween: 20 },
                640: { slidesPerView: 2, spaceBetween: 30 },
                1024: { slidesPerView: 4, spaceBetween: 40 },
              }}
              className="py-3"
            >
              {services.map((service, index) => (
                <SwiperSlide key={index}>
                  <Card key={index} className="min-h-[250px]">
                    <CardContent className="flex flex-col items-center justify-center gap-4 p-6">
                      {service.icon}
                      <Typography variant="h6" className="text-lg font-bold">
                        {service.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        className="text-muted-foreground text-center"
                      >
                        {service.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      <section className="w-full py-6 md:py-12 lg:py-18 bg-muted overflow-hidden max-w-[95vw] mx-auto">
        <div className="container mx-auto px-4 md:px-6 text-center space-y-6">
          <div className="space-y-3">
            <Typography
              variant="h2"
              className="text-3xl font-bold tracking-tighter sm:text-5xl"
            >
              {t("trusted_brands")}
            </Typography>
            <Typography
              variant="body1"
              className="max-w-[600px] mx-auto text-muted-foreground md:text-xl lg:text-base xl:text-xl"
            >
              {t("brands_description")}
            </Typography>
          </div>
          <Swiper
            modules={[Navigation, Pagination, Virtual]}
            slidesPerView={4}
            spaceBetween={30}
            navigation
            loop
            breakpoints={{
              320: { slidesPerView: 2, spaceBetween: 10 },
              480: { slidesPerView: 2, spaceBetween: 20 },
              640: { slidesPerView: 2, spaceBetween: 30 },
              1024: { slidesPerView: 4, spaceBetween: 40 },
            }}
          >
            {brands.map((brand, index) => (
              <SwiperSlide key={index}>
                <div className="flex items-center justify-center p-6 h-[150px] rounded-2xl overflow-hidden">
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="max-h-[100px] object-contain"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 max-w-[95vw] mx-auto">
        <div className="container mx-auto px-4 md:px-6 space-y-12">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <Typography
                variant="h2"
                className="text-3xl font-bold tracking-tighter sm:text-5xl"
              >
                {t("testimonials")}
              </Typography>
              <Typography
                variant="body1"
                className="max-w-[900px] text-muted-foreground md:text-xl lg:text-base xl:text-xl"
              >
                {t("feedback_description")}
              </Typography>
            </div>
          </div>
          <Swiper
            className="py-3"
            modules={[Navigation, Pagination, Virtual]}
            slidesPerView={1}
            spaceBetween={30}
            navigation
            pagination={{ clickable: true }}
            loop
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 30 },
            }}
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <Card className="p-6 h-full flex flex-col justify-between">
                  <CardContent className="flex flex-col gap-4">
                    <Typography
                      variant="body1"
                      className="text-muted-foreground text-center"
                    >
                      {testimonial.text}
                    </Typography>
                    <div className="flex flex-col items-center">
                      <img
                        src={testimonial.designation}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover mb-2"
                      />
                      <Typography variant="h6" className="text-lg font-bold">
                        {testimonial.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        className="text-muted-foreground"
                      >
                        {testimonial.position}
                      </Typography>
                    </div>
                  </CardContent>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
      <section className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
        <div className="my-5">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
            {t("contact_us")}
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-[95vw] overflow-hidden">
          <div className="flex justify-center lg:justify-start">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d693.8995184123253!2d31.17989613369147!3d30.059597478605692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sar!2seg!4v1722352321125!5m2!1sar!2seg"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="flex flex-col items-center justify-center gap-4 p-6">
                <LocalPhoneIcon
                  style={{ width: "2rem", height: "2rem" }}
                  className="text-green-500"
                />
                <Typography variant="h6" className="text-lg font-bold">
                  {t("contact_us")}
                </Typography>
                <Typography
                  variant="body2"
                  className="text-muted-foreground text-center"
                >
                  <a href={`tel:${phoneNumber}`} className="font-bold">
                    {phoneNumber}
                  </a>
                </Typography>
              </CardContent>
            </Card>

            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="flex flex-col items-center justify-center gap-4 p-6">
                <Email
                  style={{ width: "2rem", height: "2rem" }}
                  className="text-[#09c]"
                />
                <Typography variant="h6" className="text-lg font-bold">
                  {t("email_us")}
                </Typography>
                <Typography
                  variant="body2"
                  className="text-muted-foreground text-center"
                >
                  <a href={`mailto:${email}`} className="font-bold">
                    {email}
                  </a>
                </Typography>
              </CardContent>
            </Card>
            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="flex flex-col items-center justify-center gap-4 p-6">
                <WhatsApp
                  style={{ width: "2rem", height: "2rem" }}
                  className="text-green-500"
                />
                <Typography variant="h6" className="text-lg font-bold">
                  {t("whatsapp")}
                </Typography>
                <Typography
                  variant="body2"
                  className="text-muted-foreground text-center"
                >
                  <a
                    href={`https://wa.me/${phoneNumber}`}
                    className="font-bold"
                  >
                    {phoneNumber}
                  </a>
                </Typography>
              </CardContent>
            </Card>
            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="flex flex-col items-center justify-center gap-4 p-6">
                <LocationCity
                  style={{ width: "2rem", height: "2rem" }}
                  className="text-[#09c]"
                />
                <Typography variant="h6" className="text-lg font-bold">
                  {t("our_location")}
                </Typography>
                <Typography
                  variant="body2"
                  className="text-muted-foreground text-center"
                >
                  <a
                    href={`https://maps.app.goo.gl/t6ogR3DfGoEo459i7`}
                    className="font-bold"
                  >
                    {location}
                  </a>
                </Typography>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="w-full py-4 bg-gray-800 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <Typography variant="body2" className="text-center">
            © {new Date().getFullYear()} {t("company_name")}.{" "}
            {t("all_rights_reserved")}.
          </Typography>
        </div>
      </footer>
    </div>
  );
}
