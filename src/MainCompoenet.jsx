import React from "react";
import {
  Dialog,
  DialogContent,
  DialogActions,
  Button,
  Card,
  CardContent,
  Typography,
  Link,
  Input,
  TextareaAutosize,
} from "@mui/material";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LocalLaundryServiceIcon from "@mui/icons-material/LocalLaundryService";
import KitchenIcon from "@mui/icons-material/Kitchen";
import MicrowaveIcon from "@mui/icons-material/Microwave";
import AcUnitIcon from "@mui/icons-material/AcUnit";

import homeImageBackground from "./assets/Imgs/appliancesGroupHomeBackground.png";
import Logo from "./assets/Imgs/Logo.png";
import {
  Email,
  Label,
  LocationCity,
  Microwave,
  MyLocation,
  Phone,
  Tv,
  WhatsApp,
} from "@mui/icons-material";
import { Swiper, SwiperSlide } from "swiper/react";
import { brandData } from "./Brands.jsx";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Navigation, Pagination, Virtual } from "swiper/modules";
export default function MainComponent() {
  const [open, setOpen] = React.useState(true);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const phoneNumber = "+201102941029";
  const email = "ahmednasserr86@gmail.com";
  const location = "٢ شارع اليمني - أرض اللواء - حي العجوزة - محافظة الجيزة";
  var brands = brandData;
  return (
    <div className="flex flex-col min-h-dvh">
      <header className="px-4 py-4 lg:px-6 h-14 flex items-center justify-between w-[95%] mx-auto fixed top-0 left-0 right-0 z-50 rounded-b-lg bg-background shadow overflow-hidden">
        <Link href="#" className="flex items-center gap-2" prefetch={false}>
          <div className="w-[150px] h-[90px] pt-2">
            <img src={Logo} className="w-[100%] h-[100%]" />
          </div>
        </Link>
        <div className="flex items-center gap-4">
          <a href={`tel:${phoneNumber}`} className="flex items-center gap-1">
            <Phone className="w-5 h-5 text-green-500" />
            <span className="hidden sm:inline">{phoneNumber}</span>
          </a>
          <Link
            href={`https://wa.me/${phoneNumber}`}
            className="flex items-center gap-1"
            prefetch={false}
          >
            <WhatsApp className="w-5 h-5 text-green-500" />
            <span className="hidden sm:inline">WhatsApp</span>
          </Link>
        </div>
      </header>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogContent className="sm:max-w-[425px]">
          <div className="flex flex-col items-center justify-center gap-4 py-8">
            <LocalPhoneIcon
              className="size-24 text-green-500 "
              style={{ width: "3rem", height: "3rem" }}
            />
            <Typography
              variant="body1"
              className="text-lg font-medium text-center"
            >
              Call us at{" "}
              <a href={`tel:${phoneNumber}`} className="font-bold">
                {phoneNumber}
              </a>{" "}
              or chat with us on WhatsApp
            </Typography>
            <div className="flex gap-2">
              <Button
                variant="outlined"
                startIcon={<LocalPhoneIcon className="text-green-500" />}
              >
                <a href={`tel:${phoneNumber}`}>Call</a>
              </Button>
              <Button
                variant="outlined"
                startIcon={<WhatsApp className="text-green-500" />}
                component="a"
                href={`https://wa.me/${phoneNumber}`}
              >
                WhatsApp
              </Button>
            </div>
          </div>
          <DialogActions>
            <Button autoFocus onClick={handleClose}>
              Close
            </Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
      <section className="w-full py-8 md:pt-10 md:pb-6 lg:pt-16 lg:pb-8 h-dvh">
        <div className="container px-2 md:px-4 grid gap-3 lg:grid-cols-[1fr_400px] lg:gap-4 xl:grid-cols-[1fr_600px] grid-flow-row w-[100%] max-w-[100%] h-[100%]">
          <img
            src={homeImageBackground}
            width="550"
            height="350"
            alt="Hero"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-bottom sm:w-full lg:order-last lg:aspect-square bg-gray-400 h-[100%]"
          />
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <Typography
                variant="h1"
                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl"
              >
                Sal7ly Appliance Repair
              </Typography>
              <Typography
                variant="body1"
                className="max-w-[600px] text-muted-foreground md:text-xl"
              >
                Trusted appliance repair services for your home. Get your
                appliances back in working order with our expert technicians.
              </Typography>
            </div>
            <div className="flex flex-col justify-center gap-2 min-[400px]:flex-row">
              <Button
                variant="contained"
                color="success"
                startIcon={<LocalPhoneIcon />}
                component="a"
                href={`tel:${phoneNumber}`}
              >
                Call Us
              </Button>
              <Button
                variant="outlined"
                startIcon={<WhatsApp className="text-green-500" />}
                component="a"
                href={`https://wa.me/${phoneNumber}`}
              >
                WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 space-y-12">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <Typography
                variant="h2"
                className="text-3xl font-bold tracking-tighter sm:text-5xl"
              >
                Our Services
              </Typography>
              <Typography
                variant="body1"
                className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
              >
                We offer a wide range of appliance repair services to keep your
                home running smoothly.
              </Typography>
            </div>
          </div>
          <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="flex flex-col items-center justify-center gap-4 p-6">
                <LocalLaundryServiceIcon
                  style={{ width: "5rem", height: "5rem" }}
                />
                <Typography variant="h6" className="text-lg font-bold">
                  Washing Machine Repair
                </Typography>
                <Typography
                  variant="body2"
                  className="text-muted-foreground text-center"
                >
                  Our experts can diagnose and repair any issue with your
                  washing machine.
                </Typography>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col items-center justify-center gap-4 p-6">
                <KitchenIcon style={{ width: "5rem", height: "5rem" }} />
                <Typography variant="h6" className="text-lg font-bold">
                  Refrigerator Repair
                </Typography>
                <Typography
                  variant="body2"
                  className="text-muted-foreground text-center"
                >
                  Keep your food fresh with our reliable refrigerator repair
                  services.
                </Typography>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col items-center justify-center gap-4 p-6">
                <MicrowaveIcon style={{ width: "5rem", height: "5rem" }} />
                <Typography variant="h6" className="text-lg font-bold">
                  Oven Repair
                </Typography>
                <Typography
                  variant="body2"
                  className="text-muted-foreground text-center"
                >
                  Trust our experts to fix any issues with your oven or cooktop.
                </Typography>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col items-center justify-center gap-4 p-6">
                <Microwave style={{ width: "5rem", height: "5rem" }} />
                <Typography variant="h6" className="text-lg font-bold">
                  MicroWave Repair
                </Typography>
                <Typography
                  variant="body2"
                  className="text-muted-foreground text-center"
                >
                  Get your dishwasher back in top shape with our repair
                  services.
                </Typography>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col items-center justify-center gap-4 p-6">
                <AcUnitIcon style={{ width: "5rem", height: "5rem" }} />
                <Typography variant="h6" className="text-lg font-bold">
                  Air Condtion Repair
                </Typography>
                <Typography
                  variant="body2"
                  className="text-muted-foreground text-center"
                >
                  Stay cool and comfortable with our air conditioning repair
                  services.
                </Typography>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col items-center justify-center gap-4 p-6">
                <Tv style={{ width: "5rem", height: "5rem" }} />
                <Typography variant="h6" className="text-lg font-bold">
                  TV Repair
                </Typography>
                <Typography
                  variant="body2"
                  className="text-muted-foreground text-center"
                >
                  Get your clothes dry again with our expert dryer repair
                  services.
                </Typography>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <section className="w-full py-6 md:py-12 lg:py-18 bg-muted">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 min-w-[100%]">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Trusted Brands
            </h2>
            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We are authorized service providers for these leading appliance
              brands.
            </p>
          </div>
          <div className="divide-y rounded-lg overflow-hidden">
            <Swiper spaceBetween={10} slidesPerView={4} loop={true} autoplay>
              {brands.map((e) => (
                <SwiperSlide
                  key={e.name}
                  style={{ width: "auto" }}
                  className="rounded-2xl"
                >
                  <div className="card p-1 rounded-lg overflow-hidden bg-white w-[100%] lg:h-[200px] h-[100px]">
                    <img
                      src={e.logo}
                      alt={e.name}
                      className="w-[100%] h-[100%]"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
      <section className="w-full py-6 md:py-8 lg:py-10">
        <div className="container px-4 md:px-6 space-y-12">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                What Our Customers Say
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Hear from our satisfied customers about their experience with
                our appliance repair services.
              </p>
            </div>
          </div>
          <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="flex flex-col items-center justify-center gap-4 p-6">
                <blockquote className="text-lg font-semibold leading-snug">
                  &ldquo;The technician was very knowledgeable and was able to
                  quickly diagnose and fix the issue with my washing machine.
                  I'm very satisfied with the service.&rdquo;
                </blockquote>
                <div>
                  <div className="font-semibold">John</div>
                  <div className="text-sm text-muted-foreground">
                    Satisfied Customer
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col items-center justify-center gap-4 p-6">
                <blockquote className="text-lg font-semibold leading-snug">
                  &ldquo;I was impressed with the professionalism and efficiency
                  of the Sal7ly team. They were able to repair my refrigerator
                  quickly and at a fair price.&rdquo;
                </blockquote>
                <div>
                  <div className="font-semibold">Jane Smith</div>
                  <div className="text-sm text-muted-foreground">
                    Satisfied Customer
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col items-center justify-center gap-4 p-6">
                <blockquote className="text-lg font-semibold leading-snug">
                  &ldquo;I'm so glad I found Sal7ly Appliance Repair. They were
                  able to fix my oven quickly and at a reasonable cost. I highly
                  recommend their services.&rdquo;
                </blockquote>
                <div>
                  <div className="font-semibold">Michael Johnson</div>
                  <div className="text-sm text-muted-foreground">
                    Satisfied Customer
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <section className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
        <div className="my-5">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
            Contact Us
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
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
                  Call Us
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
                  Email Us
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
                  WhatsApp
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
                  Our Location
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
    </div>
  );
}
