import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "../../styles/Home.module.css";

export default function Car() {
  const [cars, setCars] = useState([]);
  useEffect(() => {
    const getCar = async () => {
      const res = await fetch("http://localhost:3000/api/car");
      const data = await res.json();
      setCars(data.cars);
    };
    getCar();
  }, []);
  return (
    <div className={styles.container}>
      <p>Menu:</p>
      <Link href="/">Home</Link>
      <h1>Halaman Car</h1>
      <h5>List Car</h5>
      <ul>
        {cars &&
          cars.map(({ brand, type, year }) => (
            <li>{`${brand} ${type} - ${year}`}</li>
          ))}
      </ul>
    </div>
  );
}
