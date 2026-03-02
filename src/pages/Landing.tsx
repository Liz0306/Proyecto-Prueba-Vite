import MainLayout from "@/components/layout/MainLayout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function App() {
  return (
    //div comleto de pagina contiene el fondo y hace que sea responsivo
    <MainLayout>
      {/*seccion de inicio bienvenida*/}
      <section className="text-center py-24 px-6">
        <h2 className="text-6xl font-bold mb-6 leading-tight">
          Conecta estudiantes{" "}
          <span className="text-indigo-500">fácilmente</span>
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto mb-8">
          Una plataforma moderna para organizar transporte seguro.
        </p>
        <Button size="lg" className="px-8">
          Comenzar 🚀
        </Button>
      </section>

      {/*seccionde tarjetas */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-8 py-16">
        <Card className="relative mx-auto w-full max-w-sm pt-0 ">
          <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
          <img
            src="https://cdn.prod.website-files.com/65ae46959867d80cb5186dcb/6666d283da34cb0248127062_BL014.jpg"
            alt="Event cover"
            className="relative z-20 aspect-video w-full object-cover rounded-t-xl"
          />
          <CardHeader>
            <CardTitle>Design systems meetup</CardTitle>
            <Badge variant="secondary">Featured</Badge>
            <CardDescription>
              A practical talk on component APIs, accessibility, and shipping
              faster.
            </CardDescription>
          </CardHeader>
          <CardFooter>
            <Button className="w-full">View Event</Button>
          </CardFooter>
        </Card>

        <Card className="relative mx-auto w-full max-w-sm pt-0 ">
          <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
          <img
            src="https://definicion.de/wp-content/uploads/2009/04/naturaleza-1.jpg"
            alt="Event cover"
            className="relative z-20 aspect-video w-full object-cover rounded-t-xl"
          />
          <CardHeader>
            <CardTitle>Design systems meetup</CardTitle>
            <Badge variant="secondary">Featured</Badge>
            <CardDescription>
              A practical talk on component APIs, accessibility, and shipping
              faster.
            </CardDescription>
          </CardHeader>
          <CardFooter>
            <Button className="w-full">View Event</Button>
          </CardFooter>
        </Card>

        <Card className="relative mx-auto w-full max-w-sm pt-0 ">
          <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
          <img
            src="https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/tnc_66430837.jpg?crop=0%2C25%2C4000%2C2200&wid=1300&hei=715&scl=3.076923076923077"
            alt="Event cover"
            className="relative z-20 aspect-video w-full object-cover rounded-t-xl"
          />
          <CardHeader>
            <CardTitle>Design systems meetup</CardTitle>
            <Badge variant="secondary">Featured</Badge>
            <CardDescription>
              A practical talk on component APIs, accessibility, and shipping
              faster.
            </CardDescription>
          </CardHeader>
          <CardFooter>
            <Button className="w-full">View Event</Button>
          </CardFooter>
        </Card>
      </section>

      {/*seccion de acordion */}
      <section className="py-24 px-6">
        <div className="max-w3xl mx-auto">
          <Accordion
            type="single"
            defaultValue="shipping"
            collapsible
            className="w-full space-y-4"
          >
            <AccordionItem value="shipping">
              <AccordionTrigger>
                What are your shipping options?
              </AccordionTrigger>
              <AccordionContent>
                We offer standard (5-7 days), express (2-3 days), and overnight
                shipping. Free shipping on international orders.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="returns">
              <AccordionTrigger>What is your return policy?</AccordionTrigger>
              <AccordionContent>
                Returns accepted within 30 days. Items must be unused and in
                original packaging. Refunds processed within 5-7 business days.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="support">
              <AccordionTrigger>
                How can I contact customer support?
              </AccordionTrigger>
              <AccordionContent>
                Reach us via email, live chat, or phone. We respond within 24
                hours during business days.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </MainLayout>
  );
}
