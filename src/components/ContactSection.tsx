import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Mail, Phone, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  email: z.string().email("Ingrese un email válido"),
  company: z.string().optional(),
  message: z.string().min(10, "El mensaje debe tener al menos 10 caracteres"),
});

const ContactSection = () => {
  const { toast } = useToast();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    toast({
      title: "Mensaje enviado",
      description: "Nos pondremos en contacto contigo pronto.",
    });
    form.reset();
  };

  return (
    <section id="contacto" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          {/* Formulario de cotización */}
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-2">Solicitar Cotización</h2>
            </div>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input 
                            placeholder="Nombre completo" 
                            className="bg-gray-50 border-0 h-12 text-base placeholder:text-gray-400 rounded-lg"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input 
                            placeholder="Email" 
                            type="email" 
                            className="bg-gray-50 border-0 h-12 text-base placeholder:text-gray-400 rounded-lg"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input 
                          placeholder="Empresa / Organización" 
                          className="bg-gray-50 border-0 h-12 text-base placeholder:text-gray-400 rounded-lg"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Textarea 
                          placeholder="Describe los productos que necesitas..."
                          className="bg-gray-50 border-0 min-h-[120px] text-base placeholder:text-gray-400 rounded-lg resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  className="w-full h-12 text-base font-semibold bg-purple-700 hover:bg-purple-800 text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={() => window.location.href = 'mailto:contacto@pka.cl'}
                >
                  Enviar Solicitud
                </Button>
              </form>
            </Form>
          </div>

          {/* Información de contacto debajo */}
          <div className="mt-12 text-center space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">Información de Contacto</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-center space-x-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <span className="text-muted-foreground">contacto@pka.cl</span>
                </div>
                
                <div className="flex items-center justify-center space-x-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <span className="text-muted-foreground">+56 9 3871.0599 / +56 9 4585.6240</span>
                </div>
                
                <div className="flex items-center justify-center space-x-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span className="text-muted-foreground">Santiago, Chile</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;