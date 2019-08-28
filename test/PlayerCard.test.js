console.log('\n\n\n\n')
const expect = require('chai').expect

require('jsdom-global')('<!DOCTYPE html><div id="id"></div>')

const axios = require('axios')
const moxios = require('moxios')

const player_stats_json = require('../api/player-stats.json')

import PlayerCard from './../src/js/PlayerCard'

describe('PlayerCard.js', () => {
    beforeEach(function () {
        moxios.install()
        moxios.stubRequest('api/player-stats.json', {
            status: 200,
            response: {
                data: player_stats_json
            }
        })
    })

    afterEach(function () {
        moxios.uninstall()
    })


    describe('api', () => {
        it('should have api key', () => {
            const playerCard = new PlayerCard({dom_id: "id"})
            expect(playerCard).to.have.any.key('api')
        })

        it('should have api key', () => {
            const playerCard = new PlayerCard({dom_id: "id"})
            expect(playerCard.api.url).to.not.be.empty // BTW it should not be hardcoded, sry
        })
    })


    describe('Creating card on initialization', () => {
        it('should have dom_root key', () => {
            const playerCard = new PlayerCard({dom_id: "id"})
            expect(playerCard).to.have.any.key('dom_root')
        })

        it('should have dom_root key', () => {
            const playerCard = new PlayerCard({dom_id: "id"})
            expect(playerCard).to.have.any.key('api')
        })

        it('should create div with class .card', () => {
            const playerCard = new PlayerCard({dom_id: "id"})
            expect(playerCard.dom_root.firstElementChild.classList.contains('card')).to.be.ok
        })
    })

})
