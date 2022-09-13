import React from 'react'

function PizzaTypes(props) {
  return (
    <>
     <div className="container pizza-typess">
      <div className="row">
        <h3 className="text-center">{props.name} Types</h3>

        <div className="col-md-3">
          <div className="thumbnail">
            <img src="images/alan-hardman-SU1LFoeEUkk-unsplash.jpg" alt="Pepperoni Pizza" />
            <div className="caption">
              <h3>Pepperoni Pizza</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                 Quos error assumenda beatae quia sit pariatur quaerat
                  expedita corrupti odit accusamus? Reprehenderit velit
                  illo autem explicabo voluptatem fugit voluptates,
                  tempora quaerat!
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="thumbnail">
            <img src="images/ivan-torres-MQUqbmszGGM-unsplash.jpg" alt="cheese" />
            <div className="caption">
              <h3>Cheese Pizza</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                 Quos error assumenda beatae quia sit pariatur quaerat
                  expedita corrupti odit accusamus? Reprehenderit velit
                  illo autem explicabo voluptatem fugit voluptates,
                  tempora quaerat!
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="thumbnail">
            <img src="images/vegetarian.PNG" alt="vegetarian" className='veg' />
            <div className="caption">
              <h3>Vegetarian Pizza</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                 Quos error assumenda beatae quia sit pariatur quaerat
                  expedita corrupti odit accusamus? Reprehenderit velit
                   illo autem explicabo voluptatem fugit voluptates,
                    tempora quaerat!
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="thumbnail">
            <img src="images/bossu.PNG" alt="Bossu" />
            <div className="caption">
              <h3>Bossu Pizza </h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                 Quos error assumenda beatae quia sit pariatur quaerat
                  expedita corrupti odit accusamus? Reprehenderit velit
                   illo autem explicabo voluptatem fugit voluptates,
                    tempora quaerat!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default PizzaTypes