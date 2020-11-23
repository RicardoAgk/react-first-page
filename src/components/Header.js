import menu from './menu-top.svg';
import logo from './ironhack-logo.svg';
import react from './react-logo.svg';
import anotherlogo from './logo.svg'
function Header() {
    return (
        <div class="container h-6000">
            <div class="row">
                <div class="col-md-12 bg-dark">
                    <img src={react} />

                    <div class="float-left mt-0">
                        <img src={logo} />

                    </div>

                    <div class="float-right mt-0">
                        <img src={menu} />
                    
                    </div>
                    <div class="float-left text-white title-hello">
                        <h1 class="float-left title-hello">Say hello to ReactJS</h1>
                        <h3 class="float-left">You will learn how to use the most polular frontend library,
                            and become a super Ninja developer.
                        </h3>

                    </div>
                    <div class="float-left botao">
                    <button type="button" class="btn btn-light">Awesome!</button>

                    </div>


                </div>
            </div>
        </div>
    )
}

export default Header