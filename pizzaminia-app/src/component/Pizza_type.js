import React from 'react'

function pizza_type({title}) {
  return (
    <>
    <div class="container pizza-typess">
      <div class="row">
        <h3 class="text-center">{title} Types</h3>

        <div class="col-md-3">
          <div class="thumbnail">
            <img src="./image/alan-hardman-SU1LFoeEUkk-unsplash.jpg" alt="Pepperoni Pizza"/>
            <div class="caption">
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
        <div class="col-md-3">
          <div class="thumbnail">
            <img src="./image/ivan-torres-MQUqbmszGGM-unsplash.jpg" alt="cheese"/>
            <div class="caption">
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
        <div class="col-md-3">
          <div class="thumbnail">
            <img src="./image/vegetarian.PNG" alt="vegetarian"/>
            <div class="caption">
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
        <div class="col-md-3">
          <div class="thumbnail">
            <img src="./image/bossu.PNG" alt="Bossu"/>
            <div class="caption">
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

export default pizza_type