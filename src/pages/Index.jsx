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
              <li><a href="#education" className="hover:text-indigo-200">Education</a></li>
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
              <p>Hi, my name is Freja. I live in Stockholm, but I'm originally from Gothenburg. I'm a multifaceted individual with interests spanning art, technology, and business management.</p>
            </CardContent>
          </Card>
        </section>

        <section id="art" className="mb-8">
          <Card>
            <CardHeader>
              <CardTitle>My Art</CardTitle>
            </CardHeader>
            <CardContent>
              <p>My paintings mostly depict faces in different styles. I like to think of everything as being both the same and different, and about how things can interact and fit together into new things. I'm also interested in how the analog can meet the digital.</p>
              {/* You can add image components or a gallery here */}
            </CardContent>
          </Card>
        </section>

        <section id="education" className="mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Education</CardTitle>
            </CardHeader>
            <CardContent>
              <p>I'm currently pursuing an M.Sc. in Industrial Engineering and Business Management, with a minor in Computer Science. Prior to this, I studied art with a bit of PR for a year, which has given me a unique perspective on both the creative and technical aspects of my work.</p>
            </CardContent>
          </Card>
        </section>

        <section id="contact">
          <Card>
            <CardHeader>
              <CardTitle>Get in Touch</CardTitle>
            </CardHeader>
            <CardContent>
              <p>I'm always happy to talk! Feel free to reach out to me at:</p>
              <p className="mt-2 font-semibold">freja.ling@gmail.com</p>
              <Button className="mt-4" onClick={() => window.location.href = 'mailto:freja.ling@gmail.com'}>
                Say Hi :)
              </Button>
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