import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';


const Home = () => {
  return (
    <div>
      <h1> Online Bakery Shop</h1>
      <img src="https://th.bing.com/th?q=Bakery+Logo+Design&w=120&h=120&c=1&rs=1&qlt=90&cb=1&pid=InlineBlock&mkt=en-US&cc=US&setlang=en&adlt=strict&t=1&mw=247 " alt="Default"  />
      <CardGroup>
      <Card>
        <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.3dVQtJtj6O_gy2Ht8WWR4AHaEy?w=298&h=194&c=7&r=0&o=5&pid=1.7" width={400} height={400} />
        <Card.Body>
          <Card.Title>BREAD</Card.Title>
          <Card.Text>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia quisquam animi dolores quidem, eaque excepturi? Cupiditate, molestias similique a natus alias eveniet fugiat blanditiis quod labore repellendus doloremque, numquam sed. <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, officia. Officiis commodi eius provident expedita dolorem, modi mollitia quod voluptate hic ut laboriosam odit? Earum deleniti repellendus praesentium ea error.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://assets.wsimgs.com/wsimgs/rk/images/dp/wcm/202417/0102/img39o.jpg " width={400} height={400}/>
        <Card.Body>
          <Card.Title>COOKIES</Card.Title>
          <Card.Text>
           Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum unde corrupti enim dolorum accusantium dolor excepturi in modi. Nam recusandae qui sed, eligendi ratione totam delectus pariatur obcaecati in modi. <br /> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab eum est quaerat possimus ut expedita harum provident beatae temporibus enim? Ab sunt quisquam perspiciatis minus vitae cumque iure ea consectetur.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.UAPbUN7rT2qCj8OLq4bTlAHaE8?w=199&h=133&c=7&r=0&o=5&pid=1.7 "width={400} height={400}  />
        <Card.Body>
          <Card.Title>CUPCAKES</Card.Title>
          <Card.Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, inventore sequi? Illo nobis quaerat quibusdam voluptate, tenetur ipsum aperiam et culpa natus a aspernatur? Iusto reiciendis nihil recusandae architecto ex! <br /> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum quae blanditiis fuga, nihil mollitia voluptas optio nam vitae delectus asperiores perferendis eius debitis provident tempora reiciendis laudantium recusandae! Natus, ab.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
  

    </div>

  );
};

export default Home;