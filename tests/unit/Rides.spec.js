import Vuex from 'vuex'
import { shallow, mount, shallowMount, createLocalVue } from '@vue/test-utils'
import Ride from '../../src/components/Ride.vue'
import Rides from '../../src/components/Rides.vue'
import Mutation from '../../src/store/index.js'

const localVue = createLocalVue()
const ridesTest = [
                  {
                   "id": 1,
                   "distance": 2,
                   "startTime": "2020-06-19T13:01:17.031Z",
                   "duration": 9000},
                  {
                    "id": 2,
                    "distance": 1,
                    "startTime": "2020-06-19T12:01:17.031Z",
                    "duration": 6000
                  }
                ]
const price = [
                {
                 "id" : 1,
                 "price": 7.5
                },
                {
                 "id" : 2,
                 "price": 15
                },
             ]

localVue.use(Vuex)

describe('Riders', () => {
    describe('with a store', () => {
        let store
        let state
        let mutations
        let getters
        let actions  
        beforeEach(() => {

            state = {
                data: [],
                ride: {},
                prices:[],
                displayModal: false
            }

            mutations = Mutation.mutations

            getters = {
                rides: () => ridesTest,
                getRide: () =>  ridesTest[0],
                prices: () => price
            }

            actions = {
                getRides: jest.fn(),
                getPrice: jest.fn()
            }

            
            store = new Vuex.Store({ state, getters, mutations, actions })
        })
        
        it('renders all rides', () => {
            const wrapper = mount(Rides, {
                store,
                localVue
            })
            expect(wrapper.findAll('.list-group-item'))
            .toHaveLength(2)
        })

        it('renders contain IDs and Prices', () => {
            const wrapper = mount(Rides, {
                store,
                localVue
            })
            expect(wrapper.find('.list-group')
            .text()).toContain('ID : 1 7.5 EUR  ID : 2 15 EUR')
        })
    })
})