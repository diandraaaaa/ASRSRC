import Heading from './components/Heading';
import Button from './components/Button';
import Paragraph from './components/Paragraph';
import Nav from './components/Nav';
import Footer from './components/Footer';

function App() {
  return (
    <div className=''>
        <Nav />
        <Heading color="black" size="h1" weight="bold">Hello World!</Heading>
        <Button color="primary" size="small">Click Me</Button>
        <Paragraph width="full" size="normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat blanditiis numquam hic placeat, nisi ut mollitia quis commodi repellendus, iure quae magnam consequatur facere saepe dolorum, amet praesentium cupiditate nam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat blanditiis numquam hic placeat, nisi ut mollitia quis commodi repellendus, iure quae magnam</Paragraph>
        <Footer />
    </div>
  );
}

export default App;
