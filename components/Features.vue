<template>
  <section class="fdb-block">
    <div class="container">
      <div class="row text-center">
        <div class="col-12">
          <h1>GameBox Truck Features</h1>
        </div>
      </div>
      <div class="row text-left mt-5">
        <div class="col-12 col-sm-6 col-lg-3">
          <div class="row">
            <div class="col-3">
              <fa-icon class="feature-icon" :icon="['fas', 'gift']" />
            </div>
            <div class="col-9">
              <h3><strong>Party Type</strong></h3>
              <p>
                Birthdays, graduations, game-nights, back-yard shindig, holiday
                parties, the list goes on.
              </p>
            </div>
          </div>
        </div>
        <div class="col-12 col-sm-6 col-lg-3 pt-3 pt-sm-0">
          <div class="row">
            <div class="col-3">
              <fa-icon class="feature-icon" :icon="['fas', 'layer-group']" />
            </div>
            <div class="col-9">
              <h3><strong>Larger Entertainment</strong></h3>
              <p>Church, Corporate, Neighborhood, and Youth group events.</p>
            </div>
          </div>
        </div>
        <div class="col-12 col-sm-6 col-lg-3 pt-3 pt-lg-0">
          <div class="row">
            <div class="col-3">
              <fa-icon
                class="feature-icon"
                :icon="['fas', 'chalkboard-teacher']"
              />
            </div>
            <div class="col-9">
              <h3><strong>Educational</strong></h3>
              <p>
                School events, fund-raisers, class specific VR (ex.Art class w/
                Tilt Brush, Music class w/ Beat Saber, VR Boxing, Fitness etc.)
              </p>
            </div>
          </div>
        </div>
        <div class="col-12 col-sm-6 col-lg-3 pt-3 pt-lg-0">
          <div class="row">
            <div class="col-3">
              <fa-icon class="feature-icon" :icon="['fas', 'trophy']" />
            </div>
            <div class="col-9">
              <h3><strong>E-sports Tournaments</strong></h3>
              <p>
                Beat Saber, Smash Bros, Fortnight, Project Cars, Street Fighter,
                Mortal Combat
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="row text-left pt-3 pt-lg-5">
        <div class="col-12 col-sm-6 col-lg-3">
          <div class="row">
            <div class="col-3">
              <fa-icon class="feature-icon" :icon="['fas', 'cloud-sun']" />
            </div>
            <div class="col-9">
              <h3><strong>Rain or Shine</strong></h3>
              <p>35ft. of climate controlled video gaming space.</p>
            </div>
          </div>
        </div>
        <div class="col-12 col-sm-6 col-lg-3 pt-3 pt-sm-0">
          <div class="row">
            <div class="col-3">
              <fa-icon class="feature-icon" :icon="['fas', 'users']" />
            </div>
            <div class="col-9">
              <h3><strong>Player Count</strong></h3>
              <p>2-24 players at once!</p>
            </div>
          </div>
        </div>
        <div class="col-12 col-sm-6 col-lg-clas3 pt-3 pt-lg-0">
          <div class="row">
            <div class="col-3">
              <fa-icon class="feature-icon" :icon="['fas', 'plus']" />
            </div>
            <div class="col-9">
              <h3><strong>Additional Games</strong></h3>
              <p>
                We facilitate outdoor yard games upon request: Cornhole, Ladder
                Ball, KanJam, Jenga.
              </p>
            </div>
          </div>
        </div>
        <div class="col-12 col-sm-6 col-lg-3 pt-3 pt-lg-0">
          <div class="row">
            <div class="col-3">
              <fa-icon class="feature-icon" :icon="['fas', 'users']" />
            </div>
            <div class="col-9">
              <h3><strong>Feature</strong></h3>
              <p>Another cool feature</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.feature-icon {
  font-size: 36px;
}

.fa-gift {
  color: rgb(167, 11, 11);
}
.fa-layer-group {
  color: rgb(143, 91, 91);
}

.fa-users {
  color: rgb(112, 112, 209);
}

.fa-trophy {
  color: gold;
}
.fa-cloud-sun {
  color: rgba(24, 161, 194, 1);
}

.fa-chalkboard-teacher {
  color: yellowgreen;
}

.fa-plus {
  color: rgb(231, 130, 62);
}
</style>