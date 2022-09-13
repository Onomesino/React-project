import React, { Component } from 'react';

class Hero extends Component {
    render() {
        return (
            
            <div class="container-fluid">
                <div class="row">
                    <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
                        <ol class="carousel-indicators">
                            <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
                            <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                            <li data-target="#carousel-example-generic" data-slide-to="2"></li>
                        </ol>

                        <div class="carousel-inner carousel-content role="listbox>
                            <div class="item active">
                                <img src="images/ivan-torres-MQUqbmszGGM-unsplash.jpg" alt="pizza" />
                            </div>
                            <div class="item">
                                <img src="images/mahyar-motebassem-pGA4zHvpo5E-unsplash.jpg" alt="pizza" />
                            </div>
                        </div>
                        <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
                          <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                          <span class="sr-only">Previous</span>
                        </a>
                        <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
                            <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </a>
                    </div>
                </div>
            </div>   
        );
    }
}

export default Hero;
