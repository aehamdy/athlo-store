import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

function ContactUsForm() {
  return (
    <form action="" className="space-y-xl">
      <div className="space-y-sm">
        <Label htmlFor="name">Your Name</Label>
        <Input id="name" required placeholder="Enter your name" className="" />
      </div>

      <div className="space-y-sm">
        <Label htmlFor="email">Your Email</Label>
        <Input
          id="email"
          required
          placeholder="Enter your email"
          className=""
        />
      </div>

      <div className="space-y-sm">
        <Label htmlFor="message">Your Message</Label>
        <Textarea
          required
          placeholder="Type your message here."
          className="bg-field"
        />
      </div>

      <Button className="main-button">Send Message</Button>
    </form>
  );
}

export default ContactUsForm;
