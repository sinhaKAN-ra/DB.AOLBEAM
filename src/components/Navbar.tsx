
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Database, Menu, X, PlusCircle, Search } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="border-b backdrop-blur-sm bg-background/80 fixed w-full z-10">
      <div className="container max-w-6xl flex items-center justify-between h-16 px-4">
        <Link to="/" className="flex items-center space-x-2">
          <Database className="h-6 w-6 text-db-primary" />
          <span className="font-bold text-lg">DB.AOLBEAM</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/databases" className="text-foreground hover:text-db-primary transition-colors">
            Databases
          </Link>
          <Link to="/categories" className="text-foreground hover:text-db-primary transition-colors">
            Categories
          </Link>
          <Link to="/contribute" className="text-foreground hover:text-db-primary transition-colors">
            Contribute
          </Link>
          <Link to="/about" className="text-foreground hover:text-db-primary transition-colors">
            About
          </Link>
        </nav>

        <div className="hidden md:flex items-center space-x-3">
          <Link to="/search">
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>
          </Link>
          <Link to="/add-database">
            <Button className="bg-gradient-to-r from-db-primary to-db-secondary hover:opacity-90">
              <PlusCircle className="mr-2 h-4 w-4" />
              Add Database
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden py-4 px-6 space-y-4 border-t bg-background">
          <Link 
            to="/databases" 
            className="block py-2 text-foreground hover:text-db-primary"
            onClick={() => setIsMenuOpen(false)}
          >
            Databases
          </Link>
          <Link 
            to="/categories" 
            className="block py-2 text-foreground hover:text-db-primary"
            onClick={() => setIsMenuOpen(false)}
          >
            Categories
          </Link>
          <Link 
            to="/contribute" 
            className="block py-2 text-foreground hover:text-db-primary"
            onClick={() => setIsMenuOpen(false)}
          >
            Contribute
          </Link>
          <Link 
            to="/about" 
            className="block py-2 text-foreground hover:text-db-primary"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <div className="pt-4 border-t flex items-center justify-between">
            <Link to="/search" onClick={() => setIsMenuOpen(false)}>
              <Button variant="outline" size="sm">
                <Search className="mr-2 h-4 w-4" />
                Search
              </Button>
            </Link>
            <Link to="/add-database" onClick={() => setIsMenuOpen(false)}>
              <Button 
                size="sm"
                className="bg-gradient-to-r from-db-primary to-db-secondary hover:opacity-90"
              >
                <PlusCircle className="mr-2 h-4 w-4" />
                Add Database
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
