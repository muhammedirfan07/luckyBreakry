import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IndianRupee } from "lucide-react";
import { categories, Category } from "@/data/categories";

const WelcomeSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const navigate = useNavigate();

  const selectedCategory: Category | undefined = categories.find(
    (cat) => cat.id === activeCategory
  );

  return (
    <section id="menu" className="section-padding bg-background">
      <div className="container-luxury">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="heading-section text-foreground mb-4">
            Welcome To Our Store
          </h2>
          <p className="text-luxury max-w-2xl mx-auto">
            It is a long established fact that a reader will be distracted by
            the readable content.
          </p>
        </div>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-12">
          {categories.map((category) => {
            const IconComponent = category.icon;
            const isActive = activeCategory === category.id;

            return (
              <button
                key={category.id}
                onClick={() =>
                  setActiveCategory(isActive ? null : category.id)
                }
                className={`group flex flex-col items-center gap-3 p-6 rounded-2xl min-w-[120px] transition-all ${
                  isActive
                    ? "bg-primary text-primary-foreground shadow-elevated scale-105"
                    : "bg-card hover:bg-secondary border hover:border-primary hover:shadow-card"
                }`}
              >
                <div
                  className={`w-16 h-16 rounded-xl flex items-center justify-center transition-colors ${
                    isActive
                      ? "bg-primary-foreground/20"
                      : "bg-secondary group-hover:bg-primary/10"
                  }`}
                >
                  <IconComponent
                    size={32}
                    className={`${isActive ? "text-primary-foreground" : "text-primary"}`}
                  />
                </div>
                <span
                  className={`text-lg font-medium ${
                    isActive ? "text-primary-foreground" : "text-foreground"
                  }`}
                >
                  {category.name}
                </span>
              </button>
            );
          })}
        </div>

        {/* Products Preview (4 items) */}
        {selectedCategory ? (
          <div className="animate-fade-in-up">
            <div className="flex items-center justify-between mb-8">
              <h3 className="heading-card text-foreground">
                Our {selectedCategory.name} Selection
              </h3>

              <button
                onClick={() => navigate(`/menu/${selectedCategory.id}`)}
                className="text-primary font-medium hover:underline"
              >
                View All →
              </button>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {selectedCategory.products.slice(0, 4).map((product, index) => (
                <div
                  key={index}
                  className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-48 w-full object-cover"
                  />
                  <div className="p-5">
                    <h4 className="text-foreground font-medium mb-2">
                      {product.name}
                    </h4>
                    <span className="flex items-center text-primary font-bold text-lg">
                      <IndianRupee className="h-4 w-4" />
                      {product.price}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center py-12 bg-secondary/30 rounded-2xl">
            <p className="text-muted-foreground text-lg">
              👆 Click on a category above to explore our delicious offerings!
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default WelcomeSection;
