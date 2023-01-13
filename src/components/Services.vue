<template>
    <section>
        <h1 class="title">Services</h1>
        <h2 class="sub-title">We are providing digital services</h2>
        <div class="grid-container">
            <div class="box">
                <div class="img-box">
                    <img src='../assets/wordpress.svg' alt="image non disponible" class="imgBox">
                </div>
                <div class="txt-box">
                    <h1 class="ttle">WordPress</h1>
                    <p class="para">Our Professional teams are Expert of the most modern standards that are steering in the WordPress</p>
                </div>
            </div>
            <div class="box">
                <div class="img-box">
                    <img src='../assets/undraw_posting_photo.svg' alt="image non disponible" class="imgBox">
                </div>
                <div class="txt-box">
                    <h1 class="ttle">Django, Angular & MySQL</h1>
                    <p class="para">Our Developers are well Professionals & Responsive of the most modern standards that are steering in the Custom Development</p>
                </div>
            </div>
            <div class="box">
                <div class="img-box">
                    <img src='../assets/undraw_rocket.svg' alt="image non disponible" class="imgBox">
                </div>
                <div class="txt-box">
                    <h1 class="ttle">Custom Development</h1>
                    <p class="para">Our Custom Development work extremely affordable, Our aim to help startups in launching online ventures</p>
                </div>
            </div>
            <div class="box">
                <div class="img-box">
                    <img src='../assets/web_maintenance.png' alt="image non disponible" class="imgBox">
                </div>
                <div class="txt-box">
                    <h1 class="ttle">WordPress</h1>
                    <p class="para">Our Professional teams are Expert of the most modern standards that are steering in the WordPress</p>
                </div>
            </div>
        </div>
    </section>
</template>
<script>

</script>
<style scoped>
section{
    height:100vh;
}
.title{
    text-align: center;
    color:#28A745;
    font-size:2rem;
    padding:1rem;
}
.sub-title{
    text-align: center;
    color:#011939;
    font-size:1.5rem;
    padding:2rem .2rem;
}
.grid-container{
    display: grid;
grid-template-columns: repeat(2, 1fr);
grid-template-rows: repeat(2, 1fr);
grid-column-gap:0px;
grid-row-gap: 25px;
margin-left:5rem;
}
.box{
    width:500px;
    height:auto;
    padding:1rem;
    border: 1px solid gray;
    display:flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 0% 0% 50% 50% / 0% 0% 20% 20%; 
box-shadow: 0px 10px 20px -7px #000000;
}
.img-box .imgBox{
    width:150px;
}
.ttle{
    text-align: center;
    padding:.5rem;
}
.para{
    text-align: center;
    padding:.5rem;
}
</style>
