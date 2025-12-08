import { useNavigate, useParams } from "react-router-dom";
import { IndianRupee } from "lucide-react";
import { categories, Category } from "@/data/categories";

const FullMenuPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate()

  const selectedCategory: Category | undefined = categories.find(
    (c) => c.id === id
  );

  if (!selectedCategory) {
    return <div className="text-center p-20">Category Not Found</div>;
  }

  return (
    <section className="section-padding container-luxury">
    <button className="text-primary font-medium hover:underline" onClick={()=>{
        navigate(-1);
    }}>
        ← Back 
    </button>
      <h2 className="heading-section mb-6">
        All {selectedCategory.name} Items
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {selectedCategory.products.map((product, index) => (
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
    </section>
  );
};

export default FullMenuPage;
