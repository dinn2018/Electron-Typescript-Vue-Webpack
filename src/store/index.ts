import Vuex from 'vuex'

// tslint:disable-next-line:no-empty-interface
interface MyStore {
    // define my store
}

export default class Store extends Vuex.Store<MyStore> {
    constructor() {
        super({
            mutations: {
                ['put'](state: MyStore, payload: any) {
                    // change states
                },
            },
            state: {
                accounts: [],
                mainAccount: { address: '' },
            },
        })
        this.update()
    }
    public async update() {
        // initialize states
    }

}
