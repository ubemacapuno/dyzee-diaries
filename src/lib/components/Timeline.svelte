<script>
  const events = [
    {date: 'March 31, 2022', title: 'Dyzee Threadz reaches $100k USD in sales (500 website orders)', image: 'src/lib/images/uploads/2022/04/20220330_132307-1200x1014.jpg', youtube: ''},
    {date: 'March 3, 2021', title: 'Dyzee launches Sneaker Storefront in Taiwan', image: 'src/lib/images/uploads/2021/06/dyzee-storefront.png', youtube: ''},
    {date: 'October 19, 2020', title: 'OUR City Bboys proves conclusive 1 on 1 Showdown format!', image: '', youtube: 'https://youtu.be/YESoTekv9Kk'},
    {date: 'July 4, 2020', title: 'Dyzee releases “The 2Stepz” the second shoe for Breakin', subtitle: 'New webstore is dropped to pre-release the 2stepz', image: 'src/lib/images/uploads/2020/07/1589518888026.jpg', youtube: ''},
    {date: 'October 1, 2019', title: 'Dyzee Successfully Accomplishes First Crowd Funder Through Bboy Community', },
    {date: 'April 18, 2019', title: 'Dyzee reveals the first official Prototype Bboy Sneakers', },
    {date: 'January 5, 2019', title: 'Dyzee proves “Conclusive exhibition battle” format with NEW YORK CITY vs CHIAYI DREAM RUNNERZ', },
    {date: 'November 26, 2018', title: 'Dyzee reveals plan to create 1st ever sneakers designed for Breakin', },
    {date: 'August 13, 2018', title: 'Dyzee and family moves to Taiwan'},
    {date: 'April 3, 2018', title: 'Dyzee becomes a Daddy!'},
    {date: 'January 15, 2017', title: 'Dyzee publicly releases “The Plan”'},
    {date: 'November 2, 2016', title: 'Dyzee launches the Dyzeediaries Vlog series'},
    {date: 'November 8, 2015', title: 'Dyzee returns with 7 Commandoz to win Freestyle Sessions (Los Angeles, USA)'},
    {date: 'April 21, 2012', title: 'Dyzee announces retirement from competitions (Circle Industry, Salzburg Austria)'},
    {date: 'July 2, 2011', title: 'Global launched the O.U.R. System (@ R16 World Championships, Seoul Korea)'},
    {date: 'March 1, 2011', title: 'Joined Cartel Creative INC as global producer of R16 World Championships'},
    {date: 'May 18, 2010', title: 'Received Blessings from OG’s and Pioneers to launch judging system (New York, USA)'},
    {date: 'May 23, 2009', title: 'Married to Janice Kim (Toronto, Canada)'},
    {date: 'August 24, 2008', title: 'Dyzee w/ Supernaturalz (+ Flexible flave) wins Freestyle Sessions World Finals (Los Angeles, USA)'},
    {date: 'August 26, 2005', title: 'Gave life to Jesus (Youngnak Church Retreat, Toronto)'},
    {date: 'October 18, 2002', title: 'First international Exhibition battle (Dyzee VS Jayrawk, Mighty 4 Sacramento, USA)'},
    {date: 'August 19, 2001', title: 'Dyzee wins Rocksteady Anniversary 1 on 1, becoming first World Champion Bboy of Asian ethnicity'},
    {date: 'November 18, 1999', title: 'Organized first Bboy competition (Back 2 da Underground - Toronto)'},
    {date: 'June 18, 1995', title: 'Joined Supernaturalz Crew (Toronto Canada)'},
    {date: 'June 18, 1994', title: 'Started Breakin'},

  ]
</script>

<h1>Dyzee's Timeline</h1>


<div class="grid">
  {#each events as event}
    <div class="event">
      <h5 class="date">
        {event.date}
      </h5>
      <!-- {#if event.image}
         <img  class="media" src={event.image} alt={event.title}/>
      {/if}
      {#if event.youtube}
         <span class="media" >{event.youtube}</span>
      {/if} -->
      <div class="content">

        <h5 class="title">{event.title}</h5>
        {#if event.subtitle}
        <p class="subtitle">{event.subtitle}</p>
        {/if}
      </div>

    </div>
  {/each}
</div>

<style>

h1 {
  margin: 80px 0 50px 0;
  text-align: center;
}

  .grid {
    /* display: grid;
    grid-template-columns: repeat(2,1fr);
    grid-gap: 10%;
    margin-bottom: 120px; */
    position: relative;
    padding-left: 20px;
    margin: 0 auto;
    max-width: 700px;
  }

  .grid:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 2px;
    background: black;
  }

  .event { 
    /* border: 1px solid red; */
    /* overflow: hidden; */
    /* position: relative;
    display: flex;
    flex-direction: column; */
    max-width: 40rem;
    border-radius: 16px;
    /* overflow: hidden; */
    margin: 0;
    background: var(--nav-text-color);
    position: relative;
    }

.event:before {
  content: '';
  position: absolute;
  top: 50%;
  left: -20px;
  width: 20px;
  height: 2px;
  background: black;
}

  .event + .event {
    margin-top: 60px;
  }

  .event .date {
    background: var(--primary-color);
    color: white;
    margin: 0;
    padding: 20px 10px;
    border-radius: 16px 16px 0 0;
  }

  .content {
    margin: 0;
    padding: 20px 10px;
  }

  /* .media {
    width: 100%;
    border: 1px solid green;
    border-bottom: none;
  } */

  .title {
    margin: 0;
    font-size: 1.2rem;
  }
/* 
  .event:nth-child(even) {
    margin-top: 60px;
  } */

  /* .event:nth-child(even) .date {
    background: red;
  }

  .event:nth-child(even) .media {
    border-color: red;
    
  } */

  /* @media only screen and (max-width: 900px) {
    .grid {
      display: block;
    }
  } */
</style>