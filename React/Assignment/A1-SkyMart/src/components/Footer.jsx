const Footer = () => {
  return (
    <footer className="neu mt-20 mx-4 sm:mx-8 mb-6 rounded-2xl py-10 text-center">
      <h2 className="text-4xl font-bold">
        <span className="text-white">Sky</span><span className="text-volt">Mart</span>
      </h2>

      <p className="text-muted mt-4">
        All Rights Reserved © 2026 SkyMart. Built with React & Tailwind CSS.
      </p>

      <p className="text--muted mt-2">
        Build by{" "}
        <a
          href="https://www.linkedin.com/in/aashish-gupta001/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-volt font-semibold hover:underline"
        >
          Aashish Gupta
        </a>
      </p>
    </footer>
  );
};

export default Footer;
