<template>
    <section>
        <!-- <Myttle>Contact</Myttle> -->
        <div class="title">
            <h1 class="title1">Contact</h1>
        </div>
        <div class="container">
            <div class="sub-container1">
                <div class="content">
                        <h1 class="subtitle">We are here to help</h1>
                    <h3 class="subpara">Find the right solution</h3>
                </div>
                    <div class="content">
                        <h1 class="subtitle">General enquiries</h1>
                    <h3 class="subpara"><a href="mailto:contact@egeratech.com">contact@egeratech.com</a></h3>
                    </div>
                    <div class="content">
                        <h1 class="subtitle">Phone Number</h1>
                        <h3 class="num">+25769842175</h3>
                        <h3 class="num">+25779778929</h3>
                    </div>
                    <div class="content">
                          <h1 class="subtitle">Address</h1>
                    <h3 class="subpara">Avenue des Etats Unis, № 76, Kigobe Sud</h3>
                    </div>
            </div>
            <div class="sub-container2">
                <form method="post">
                    <div class="div-input">
                        <div class="input1">
                            <input type="text" name="name" placeholder="Your Name...">
                        </div>
                        <div class="input2">
                            <input type="text" name="mail..." placeholder="Your email">
                        </div>
                    </div>
                    <textarea class="txtarea"  cols="50" rows="6" placeholder="Your Message..."></textarea><br>
                    <button>Submit</button>
                </form>

            </div>
        </div>
    </section>
</template>
<script>
// import OurTitle from '@/components/OurTitle.vue'
// import Myttle from '@/components/Myttle.vue'
// export default {
//    name:'Contact',
//    component: {
//     Myttle
//    }

// }
</script>

<style scoped>
.title1{
    text-align: center;
    font-size:2rem;
    color:#28A745;
} 
.container{
    display:flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
}
.sub-container{
    display:flex;
    flex-direction: column;
}
.content{
    margin:1rem;
}
.subtitle{
    font-size:1.8rem;
}
.subpara{
    font-size:1.4rem;
}
.subpara a{
    text-decoration: none;
    color:#000;
}
/*=================================*/

.div-input{
    display:flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
}
.input1 input{
    width:10rem;
    height:2rem;
    margin:.5rem;
}
.input2 input{
     width:10rem;
    height:2rem;
}
.txtarea{
    margin:.5rem;
    border-radius:5px;
}
button{
    background:#28A745;
    color:#fff;
    font-size:1rem;
    font-weight:600;
    border-radius:5px;
    padding:.3rem 1.8rem;
}
</style>
