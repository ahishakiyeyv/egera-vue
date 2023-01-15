<template>
    <div class="container">
        <a href="#" class="logo">
            <!-- Egera<span>Tech</span> -->
            <img src='../assets/egeraTech_Logo.png' alt="Image non disponible" class="img-logo">
        </a>
        <ul class="ul">
            <li class="li"><router-link to="/services" class="link_name">Services</router-link></li>
            <li class="li"><router-link to="/ourTeam" class="link_name">Our Team</router-link></li>
            <li class="li"><router-link to="/portfolio" class="link_name">Portfolio</router-link></li>
            <li class="li"><router-link to="/ourpartners" class="link_name">Our Partners</router-link></li>
            <li class="li"><router-link to="/contact" class="link_name">Contact</router-link></li>
            <!-- <li class="li"><a href="#" class="link_name">Our Team</a></li>
            <li class="li"><a href="#" class="link_name">Portfolio</a></li>
            <li class="li"><a href="#" class="link_name">Our Partners</a></li>
            <li class="li"><a href="#" class="link_name">Contact</a></li> -->
        </ul>
    </div>
</template>
<style scoped>
.container{
    width:100%;
    position:fixed;
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    background:#fff;
   /* // border-bottom:1px solid rgba(0,0,0,0.5); */
    box-shadow: 0px 2px rgba(0,0,0,0.5);
}
.logo{
    color:green;
    text-decoration: none;
    font-size:1.6rem;
    font-weight:600;
    padding:1.5rem 2rem;
    
}
.img-logo{
    height:auto;
    width:15rem;
}
.logo span{
    color:#001539;
}
.ul{
    list-style: none;
    display: flex;
    flex-direction: row;
    padding:2rem 1.2rem;
}
.li .link_name{
    padding:1rem 1rem;
    text-decoration:none;
    color:#28A745;
    font-size:1.4rem;
    font-weight:600;
    
}
</style>