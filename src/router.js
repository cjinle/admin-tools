import Index from './components/Index.vue'
import HelloWorld from './components/HelloWorld.vue'
import PlayTime from './components/PlayTime.vue'
import PayAmount from './components/PayAmount.vue'
import Mtime from './components/Mtime.vue'
import Invite from './components/Invite.vue'
import TimePromo from './components/TimePromo.vue'
import Newbie from './components/Newbie.vue'
import Prop from './components/Prop.vue'
import Continuous from './components/Continuous.vue'
import OnlineBox from './components/OnlineBox.vue'
import Empty from './components/Empty.vue'

const routes = [
  { path: '/', component: Index },
  { path: '/playtime', component: PlayTime },
  { path: '/payamount', component: PayAmount },
  { path: '/mtime', component: Mtime },
  { path: '/invite', component: Invite },
  { path: '/timepromo', component: TimePromo },
  { path: '/newbie', component: Newbie },
  { path: '/prop', component: Prop },
  { path: '/continuous', component: Continuous },
  { path: '/onlinebox', component: OnlineBox },

  { path: '/puzzle', component: HelloWorld },
  { path: '/404', component: Empty }
]

export { routes }