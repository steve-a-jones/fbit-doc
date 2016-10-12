const neodoc = require('neodoc');

const rootDoc = `
    fbit : commandline access to the fitbit api.

    usage:
        fbit [--version] [--help] [<command> [<args>]...]

    These are common fbit commands used in various situations:

    CONFIGURATION:
        devprofile     Manage developer api access.
        userprofile    Manage user profiles.
        bind           Bind a userprofile to a devprofile for api access.

    API RESOURCE ACCESS:
        activity       Activity resource.

    'fbit help -a' list available subcommands.
    'fbit help <command>' to read about a specific subcommand.
`;

const subCommandsDoc = `
    usage:
        fbit (activity|user|devprofile|userprofile|help|bind) [<args>...]
`;

const init = () => {
    const rootArgs = neodoc.run(rootDoc, {smartOptions:true, optionsFirst: true});
    const subCommandArgs = neodoc.run(subCommandsDoc, {smartOptions:true, optionsFirst: true});
    const subCommandModuleName = rootArgs['<command>'];
    const subCommandModuleArgs = rootArgs['<args>'];
    return require(`./${subCommandModuleName}`)(subCommandModuleArgs);
};

init()