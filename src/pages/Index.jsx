import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <header className="bg-indigo-600 text-white p-4">
        <div className="flex justify-between items-center max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold">Freja Ling</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#about" className="hover:text-indigo-200">About</a></li>
              <li><a href="#art" className="hover:text-indigo-200">Art</a></li>
              <li><a href="#finance" className="hover:text-indigo-200">Finance</a></li>
              <li><a href="#contact" className="hover:text-indigo-200">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-grow p-4 max-w-4xl mx-auto">
        <section id="about" className="mb-8">
          <Card>
            <CardHeader>
              <CardTitle>About Me</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Hello! I'm Freja Ling, an artist with a passion for finance. I balance my creative pursuits with my career in banking, finding inspiration in both worlds.</p>
            </CardContent>
          </Card>
        </section>

        <section id="art" className="mb-8">
          <Card>
            <CardHeader>
              <CardTitle>My Art</CardTitle>
            </CardHeader>
            <CardContent>
              <p>As an artist, I specialize in [your art form]. My work explores themes of [your themes]. Check out my latest pieces below.</p>
              {/* You can add image components or a gallery here */}
            </CardContent>
          </Card>
        </section>

        <section id="finance" className="mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Banking Career</CardTitle>
            </CardHeader>
            <CardContent>
              <p>In my role as a bank employee, I [brief description of your role]. I'm passionate about [aspect of finance you're interested in].</p>
            </CardContent>
          </Card>
        </section>

        <section id="contact">
          <Card>
            <CardHeader>
              <CardTitle>Get in Touch</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Interested in my art or financial expertise? Don't hesitate to reach out!</p>
              <Button className="mt-4">Contact Me</Button>
            </CardContent>
          </Card>
        </section>
      </main>

      <footer className="bg-indigo-600 text-white p-4 text-center">
        <p>&copy; 2023 Freja Ling. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;