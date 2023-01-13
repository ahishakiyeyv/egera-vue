<template>
    <section>
        <div class="container">
            <div class="content1">
                    <h1 class="title">EgeraTech</h1>
                    <p class="para">Your Creative Partner for Scale Your <br><span>Business/Activity</span></p>
                    <a href="#" class="btn-link">GET IN TOUCH</a>
            </div>
            <div class="content2">
                <img src='../assets/default.jpg' alt="Image non disponible" class="default">
            </div>
        </div>
    </section>
</template>
<script>

</script>
<style scoped>
section{
    max-height:80%;
}
.container{
    background:#28A745;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    max-height:80%;
    border-radius: 0% 0% 50% 50% / 0% 0% 20% 20%;
}
.content1{
    width:40%;
    margin:1rem;
    padding:1rem;
}
.title{
    color:#fff;
    text-align: center;
    font-weight:600;
    font-size:2.5rem;
    padding:1rem;
}
.para{
    color:#fff;
    font-size:1.3rem;
    font-weight:600;
    text-align: center;
    letter-spacing: 2px;
    margin-bottom:2rem;
}
span{
     animation: slide-right 5s 2s infinite both;
}
@keyframes slide-right {
  0% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
  }
  100% {
    -webkit-transform: translateX(100px);
            transform: translateX(100px);
  }
  }
.btn-link{
    text-decoration: none;
    margin-left:11rem;
    background:#001539;
    color:#fff;
    font-weight:700;
    padding:.5rem 1rem;
    border-radius:.5rem
}
.content2{
    width:44%;
    background:#28A745;
    margin:3rem;
       border-radius: 0% 0% 50% 50% / 0% 0% 20% 20%;
box-shadow: 0px 0px 20px -3px #000000;
}
.default{
        border-radius: 0% 0% 50% 50% / 0% 0% 20% 20%;
    height:25rem;
    width:37rem;
}
</style>