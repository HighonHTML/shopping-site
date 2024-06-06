import PageNav from "../../componenets/pageNav/PageNav";
import styles from "./HomePage.module.css";
function HomePage() {
  return (
    <main className={styles.homePage}>
      <PageNav />
      <section>
        <h1 className="flex justify-center items-center">Home Page</h1>
      </section>
    </main>
  );
}

export default HomePage;
