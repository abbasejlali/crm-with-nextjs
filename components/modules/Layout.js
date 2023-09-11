import Link from "next/link";

const Layout = ({ children }) => {
  return (
    <>
      {" "}
      <header className="header">
        <h2>Customer CRM</h2>
        <Link href="/add-customer">Add Customer</Link>
      </header>
      <div className="main">{children}</div>
      <footer className="footer">
        <a href="https://abbasejlali.ir" target="_blank" rel="noreferrer">
          Abbas Ejlali
        </a>{" "}
        Customer CRM With Next Js | CRM Project &copy;
      </footer>
    </>
  );
};

export default Layout;
