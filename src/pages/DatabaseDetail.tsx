
import { useParams, Link } from "react-router-dom";
import { databases } from "@/data/databases";
import Layout from "@/components/Layout";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, XCircle, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Card } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";

const DatabaseDetail = () => {
  const { slug } = useParams();
  const { toast } = useToast();
  
  const database = databases.find((db) => db.slug === slug);

  if (!database) {
    return (
      <Layout>
        <div className="pt-24 pb-16 container px-4 max-w-6xl text-center">
          <h1 className="text-4xl font-bold mb-8">Database Not Found</h1>
          <p className="mb-8">
            The database you're looking for doesn't exist or has been removed.
          </p>
          <Link to="/databases">
            <Button>View All Databases</Button>
          </Link>
        </div>
      </Layout>
    );
  }

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    toast({
      description: "Link copied to clipboard!",
      duration: 2000,
    });
  };

  return (
    <Layout>
      <div className="pt-24 pb-16">
        <div className="container px-4 max-w-6xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
            <div className="flex items-center">
              {database.logoUrl ? (
                <img 
                  src={database.logoUrl} 
                  alt={`${database.name} logo`} 
                  className="w-16 h-16 object-contain mr-5"
                />
              ) : (
                <div className="w-16 h-16 flex items-center justify-center rounded-lg bg-muted text-2xl font-bold mr-5">
                  {database.name.charAt(0)}
                </div>
              )}
              <div>
                <h1 className="text-4xl font-bold mb-2">{database.name}</h1>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="border-db-primary text-db-primary">
                    {database.category}
                  </Badge>
                  <Badge variant="outline" className="border-muted-foreground text-muted-foreground">
                    {database.type}
                  </Badge>
                  <Badge variant="outline" className="border-muted-foreground text-muted-foreground">
                    {database.license}
                  </Badge>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              {database.websiteUrl && (
                <a 
                  href={database.websiteUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center"
                >
                  <Button variant="outline">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Website
                  </Button>
                </a>
              )}
              {database.documentationUrl && (
                <a 
                  href={database.documentationUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center"
                >
                  <Button variant="outline">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Documentation
                  </Button>
                </a>
              )}
              {database.githubUrl && (
                <a 
                  href={database.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center"
                >
                  <Button variant="outline">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    GitHub
                  </Button>
                </a>
              )}
              <Button variant="ghost" onClick={handleCopyLink}>
                Share
              </Button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-8">
              <Card className="p-6">
                <h2 className="text-2xl font-semibold mb-4">Description</h2>
                <p className="text-muted-foreground">{database.description}</p>
              </Card>

              <Card className="p-6">
                <h2 className="text-2xl font-semibold mb-4">Features</h2>
                <ul className="space-y-2">
                  {database.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </Card>

              <Card className="p-6">
                <h2 className="text-2xl font-semibold mb-4">Common Use Cases</h2>
                <ul className="space-y-2">
                  {database.useCases.map((useCase, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>{useCase}</span>
                    </li>
                  ))}
                </ul>
              </Card>

              <Card className="p-6">
                <h2 className="text-2xl font-semibold mb-6">Pros and Cons</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-medium mb-3 text-green-600 dark:text-green-500">Pros</h3>
                    <ul className="space-y-2">
                      {database.pros.map((pro, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span>{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium mb-3 text-red-600 dark:text-red-500">Cons</h3>
                    <ul className="space-y-2">
                      {database.cons.map((con, index) => (
                        <li key={index} className="flex items-start">
                          <XCircle className="h-5 w-5 text-red-600 dark:text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span>{con}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            </div>

            <div className="space-y-8">
              <Card className="p-6">
                <h2 className="text-xl font-semibold mb-4">Info</h2>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground mb-1">Type</h3>
                    <p>{database.type}</p>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground mb-1">License</h3>
                    <p>{database.license}</p>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground mb-1">Deployment Options</h3>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {database.selfHosted && (
                        <Badge variant="outline">Self-Hosted</Badge>
                      )}
                      {database.cloudOffering && (
                        <Badge variant="outline">Cloud Service</Badge>
                      )}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground mb-1">Supported Languages</h3>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {database.languages.map((language, index) => (
                        <Badge key={index} variant="outline">{language}</Badge>
                      ))}
                    </div>
                  </div>

                  {database.stars && (
                    <div>
                      <h3 className="text-sm font-medium text-muted-foreground mb-1">GitHub Stars</h3>
                      <p>{database.stars.toLocaleString()}</p>
                    </div>
                  )}

                  <Separator />
                  
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground mb-1">Last Updated</h3>
                    <p>{new Date(database.updatedAt).toLocaleDateString()}</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h2 className="text-xl font-semibold mb-4">Contribute</h2>
                <p className="text-muted-foreground mb-4">
                  Is this information incorrect or incomplete? Help us improve this database profile!
                </p>
                <div className="flex flex-col space-y-2">
                  <Link to={`/edit-database/${database.slug}`}>
                    <Button variant="outline" className="w-full">
                      Edit this database
                    </Button>
                  </Link>
                  <Button variant="ghost" className="w-full">
                    Report an issue
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DatabaseDetail;
