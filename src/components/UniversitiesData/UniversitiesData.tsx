import useFetchData from "../../hook/useFetchData";
import styles from "./UniversitiesData.module.css";
import { Link } from "../../assets";
interface UniversityData {
  alpha_two_code: string;
  name: string;
  web_pages: string[];
  state_province: string | null;
  domains: string[];
  country: string;
}
const UniversitiesData = ({ selectedValue }: { selectedValue: string }) => {
  const value = selectedValue.split(" ");
  var country = selectedValue;
  if (value.length > 0) {
    country = selectedValue.split(" ").join("+");
  }
  const url = `http://universities.hipolabs.com/search?country=${country}`;
  const { data, error } = useFetchData<UniversityData[]>(url);
  console.log(data);
  if (error) return <p>There is an Error</p>;
  return (
    <div className={styles.universitiesData}>
      {!data ? (
        <div className={styles.loader}></div>
      ) : data?.length === 0 ? (
        <div className={styles.noData}>No University found</div>
      ) : (
        <div className={styles.universityDataCardContainer}>
          {data.map((university, index) => {
            return (
              <div key={index} className={styles.card}>
                <div className={styles.name}>{university.name}</div>
                <div className={styles.country}>{university.country}</div>
                <div className={styles.url}>
                  <a
                    href={university.web_pages[0]}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Visit Here <img src={Link} alt="link" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
export default UniversitiesData;
