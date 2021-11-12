import Link from "next/link";
import styles from "../../styles/Home.module.css";
import prisma from "../../lib/prisma";

export const getServerSideProps = async (req, res) => {
  const params = req.params;
  const employee = await prisma.employee.findFirst({
    where: { id: params.id },
  });
  const cars = await prisma.car.findMany({ where: { employeId: params.id } });
  return { props: { employee, cars } };
};

export default function UserCar({ employee, cars }) {
  return (
    <div className={styles.container}>
      <p>Menu:</p>
      <Link href="/">Home</Link>
      <h1>Halaman Car {employee?.name}</h1>
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
