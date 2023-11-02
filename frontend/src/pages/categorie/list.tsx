import Card from "@/components/categories/Card";
// import { Category } from "@/types/categories";
// import axios from "axios";
import { useEffect} from "react";
import styles from "@/styles/pages/categories/list/Categories.module.css";
import { useQuery } from "@apollo/client";
import { LIST_CATEGORIES } from "@/requetes/queries/categories.queries";

function Categories() {
// function Categories({ data }: { data: Category[] }) {
  //?  Methode avec le rendu côté serveur
  // const [categories, setCategories] = useState<Category[]>([]);


  /**=======================
   * *       RECUPERATION DES DONNEES
   *  
   *  
   *========================**/

  const { loading, data, error } = useQuery(LIST_CATEGORIES);
  console.log('%c⧭', 'color: #aa00ff', error);
  console.log('%c⧭', 'color: #00a3cc', loading);
  console.log('%c⧭', 'color: #00e600', data);

  /**======================
   *    methode avec le rendu côté client
   *========================**/
  // useEffect(() => {
    // fetch("http://localhost:4000/categories/list")
    //   .then((response) => response.json())
    //   .then((data) => setCategories(data));
    // axios
    //   .get<Category[]>("http://localhost:4000/categories/list")
    //   .then(({ data }) => setCategories(data));
  // }, []);
  return (
    <div>
      <h1>Liste des catégories</h1>
      <div className={styles.cardBloc}>
        {data?.listCategories.map((c: any) => (
          <Card key={c.id} id={c.id} name={c.name} />
        ))}
      </div>
    </div>
  );
}

/**========================================================================
 *                           Méthode avec le rendu côté serveur
 *========================================================================**/
// export const getServerSideProps = async () => {
//   const { data } = await axios.get<Category[]>(
//     "http://localhost:4000/categories/list"
//   );
//   return { props: { data, maValeur: "toto" } };
// };
export default Categories;
