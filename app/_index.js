
import { Base } from 'yeoman-generator'
import chalk from 'chalk'
import yosay from 'yosay'
import osenv from 'osenv'

export default class UrbanGenerator extends Base {
    constructor( ...args ) {
        super( ...args )
    }

    pkg = require( '../package.json' )

    static prompts = [{
        name: 'projectName',
        message: 'What is the name of your project?',
        validate: str => {
            return !/\s/.test( str )
        }
    }, {
        name: 'projectDescription',
        message: 'What is the project description?'
    }, {
        name: 'authorName',
        message: 'What is the author name?',
        default: osenv.user()
    }, {
        name: 'userName',
        message: 'What is your github username?',
        default: osenv.user().toLowerCase().replace( /\s/g, '' )
    }]

    hello() {
        this.log( yosay([
            chalk.cyan( 'Urban Web Client' ),
            'Feed me information...'
        ].join( '\n' )))
    }

    app() {
        this.prompt( UrbanGenerator.prompts, props => {
            this.props = props

            console.log( 'all done' )
            console.log( props )
        })
    }
}
