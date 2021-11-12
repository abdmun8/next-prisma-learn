import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import prisma from "../lib/prisma";

export const getServerSideProps = async () => {
  const employee = await prisma.employee.findMany();
  return { props: { employee } };
};
export default function Home({ employee }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Karyawan</title>
      </Head>
      <p>Menu:</p>
      <Link href="/car">Car</Link>
      <h1>Halaman Karyawan</h1>
      <h5>Deskripsi</h5>
      <p>Ini adalah halaman karyawan</p>
      <h5>List Karyawan</h5>
      <ul>
        {employee &&
          employee.map((emp) => (
            <li>
              <Link href={`/car/${emp.id}`}>{emp.name}</Link>
            </li>
          ))}
      </ul>
    </div>
  );
}
