import Advert from "@/components/Home/Advert";
import Banners from "@/components/Home/Banners";
import Deals from "@/components/Home/Deals";
import Footer from "@/components/Home/Footer";
import Header from "@/components/Home/Header";
import Navbar from "@/components/Home/Navbar";
import SlideShow from "@/components/Home/SlideShow";
import Tabs from "@/components/Home/Tabs";
import TopProducts from "@/components/Home/TopProducts";
import React from "react";
import Head from "next/head";

type Props = {};

const page = (props: Props) => {
  return (
    <>
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              var glassixWidgetOptions = {
                "numbers": [
                  {"number": "9725012345678", "name": "Customer Support", "subtitle": "Contact us 24/7"},
                  {"number": "9725012345678", "name": "Sales Team", "subtitle": ""}
                ],
                "left": false,
                "ltr": true,
                "popupText": "Need help?\nChat with us on WhatsApp",
                "title": "Hi There 👋",
                "subTitle": "Click to start a conversation"
              };
              !function (t) {
                var e = function () {
                  window.requirejs && !window.whatsAppWidgetClient && (requirejs.config({ paths: { GlassixWhatsAppWidgetClient: "https://cdn.glassix.com/clients/whatsapp.widget.1.2.min.js" } }), require(["GlassixWhatsAppWidgetClient"], function (t) { window.whatsAppWidgetClient = new t(window.glassixWidgetOptions), whatsAppWidgetClient.attach() })), window.GlassixWhatsAppWidgetClient && "function" == typeof window.GlassixWhatsAppWidgetClient ? (window.whatsAppWidgetClient = new GlassixWhatsAppWidgetClient(t), whatsAppWidgetClient.attach()) : i()
                },
                i = function () {
                  a.onload = e,
                  a.src = "https://cdn.glassix.net/clients/whatsapp.widget.1.2.min.js",
                  s && s.parentElement && s.parentElement.removeChild(s),
                  n.parentNode.insertBefore(a, n)
                },
                n = document.getElementsByTagName("script")[0],
                s = document.createElement("script");
                s.async = !0, s.type = "text/javascript", s.crossorigin = "anonymous", s.id = "glassix-whatsapp-widget-script";
                var a = s.cloneNode();
                s.onload = e,
                s.src = "https://cdn.glassix.com/clients/whatsapp.widget.1.2.min.js",
                !document.getElementById(s.id) && document.body && (n.parentNode.insertBefore(s, n), s.onerror = i)
              }(glassixWidgetOptions);
            `,
          }}
        />
      </Head>
      <title>Home | One Faster</title>
      <div>
        <section
          id="hero"
          className=" text-white bg-gradient-to-t from-gray-800 to-gray-900 w-full h-fit"
        >
          <Header />
          <Navbar />
          <Tabs />
          <SlideShow />
        </section>
        <Deals />
        <TopProducts />
        <Advert />
        <Banners />
        <Footer />
      </div>
    </>
  );
};

export default page;
