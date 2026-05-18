import PageHero from "@/components/shared/PageHero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";

export default function ApplyPage() {
  return (
    <>
      <PageHero
        title="Application Form"
        subtitle="Fill out the form to apply for B.E Technology Evening Programs"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Admissions", href: "/admissions" },
          { label: "Apply Now" },
        ]}
      />
      <section className="py-16 px-4 max-w-3xl mx-auto">
        <form className="space-y-6 bg-surface p-8 rounded-xl border">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Label htmlFor="name" className="mb-2">
              Full Name
            </Label>
            <Input id="name" placeholder="John Doe" className="h-10" />
          </div>
          <div>
            <Label htmlFor="email" className="mb-2">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="john@example.com"
              className="h-10"
            />
          </div>
          <div>
            <Label htmlFor="phone" className="mb-2">
              Phone Number
            </Label>
            <Input id="phone" placeholder="03XX-XXXXXXX" className="h-10" />
          </div>
          <div className="w-full">
            <Label htmlFor="program" className="mb-2 block">
              Program of Interest
            </Label>

            <Select>
              <SelectTrigger id="program" className="w-full h-14 rounded-md">
                <SelectValue placeholder="Select program" />
              </SelectTrigger>

              <SelectContent className="w-full">
                <SelectItem value="electrical" className="py-3">
                  B.E Electrical Technology
                </SelectItem>

                <SelectItem value="mechanical" className="py-3">
                  B.E Mechanical Technology
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="message" className="mb-2">
              Message (optional)
            </Label>
            <Textarea
              id="message"
              rows={4}
              placeholder="Any additional information..."
            />
          </div>
          <Button
            type="submit"
            className="bg-gold text-primary-dark hover:text-white transition-colors font-bold w-full h-12"
          >
            Submit Application
          </Button>
        </form>
      </section>
    </>
  );
}
