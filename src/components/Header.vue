<template>
    <header>
        <nav class="navbar navbar-expand-lg navbar-light">
            <div class="container-fluid">
                <router-link to="/" class="navbar-brand"><img src="/images/logo.png" width="30" height="30" class="d-inline-block align-top mr-1" alt="霜降りGROOVE logo">霜降り<span class="dunkin">GROOVE</span></router-link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                <div class="collapse navbar-collapse" id="navbar">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item">
                            <router-link to="/#sns" class="nav-link" v-smooth-scroll>SNS</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/#events" class="nav-link" v-smooth-scroll>開催予定 Upcoming Events</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/#movie" class="nav-link" v-smooth-scroll>配信 Live Stream</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/#archive" class="nav-link" v-smooth-scroll>過去回 Archives</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>
