import Greeting from "./Greeting"
import FormExample from "./FormExample";


function Home() {
  const name = "Learner!";

  return (
    <div>
      <h2 className="" style={{ padding: '20px' }}><Greeting name={name} /></h2>
      <h3 style={{marginLeft:'20px'}}><p>Welcome to React World!!!</p></h3>
      <FormExample name={name} />

    </div>
  );
}

export default Home;