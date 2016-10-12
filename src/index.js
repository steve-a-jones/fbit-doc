const neodoc = require('neodoc');

const rootDoc = `
    usage:
        fbit [--version] [--help] [<command> [<args>]...]

    The most commonly used fbit commands are:
       config     Manage your developer api access configuration.
       profile    Manage user profiles.
       auth       Authenticate api access for an individual user profile.
       activity   Access the activity api resource.
       user       Access the user api resource.

    'fbit help -a' list available subcommands.
    'fbit help <command>' to read about a specific subcommand.
`;

const subCommandsDoc = `
    usage:
        fbit (activity|auth|config|help|profile|user) [<args>...]
`;

const init = () => {
    const rootArgs = neodoc.run(rootDoc, {smartOptions:true, optionsFirst: true});
    const subCommandArgs = neodoc.run(subCommandsDoc, {smartOptions:true, optionsFirst: true});
    return require(`./${rootArgs['<command>']}`)(
        [rootArgs['<command>']].concat(rootArgs['<args>'])
    );
};

init();