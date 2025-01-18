import Button from "../components/Button";

const HomePage = () => {
  return (
    <>
      <div className="container mx-auto py-20">
        <p className="py-3">Helo dunia</p>
        <div className="flex items-center gap-10">
          <Button variant="primary">Button</Button>
          <Button variant="secondary">Button</Button>
        </div>
      </div>
    </>
  );
};

export default HomePage;
