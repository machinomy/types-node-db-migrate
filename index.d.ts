declare module 'node-db-migrate' {
  namespace DBMigrate {
  }

  class DBMigrate {
    /**
     * Add a global defined variable to db-migrate, to enable access from
     * local migrations without configuring pathes.
     *
     * @return boolean
     */
    addGlobal: Function

    /**
     * Registers and initializes hooks.
     *
     * @returns Promise
     */
    registerAPIHook: Function

    /**
     * Add a configuration option to dbmigrate.
     *
     * @return boolean
     */
    addConfiguration: Function

    /**
     * Resets and sets argv to a specified new argv.
     */
    resetConfiguration: Function

    /**
     * Executes up a given number of migrations or a specific one.
     *
     * Defaults to up all migrations if no count is given.
     */
    up: Function

    /**
     * Executes up a given number of migrations or a specific one.
     *
     * Defaults to up all migrations if no count is given.
     */
    down: Function

    check: Function

    /**
     * Executes up a given number of migrations or a specific one.
     *
     * Defaults to up all migrations if no count is given.
     */
    sync: Function

    /**
     * Executes down for all currently migrated migrations.
     */
    reset: Function

    /**
     * Silence the log output completely.
     */
    silence: Function

    /**
     * Transition migrations to the latest defined protocol.
     */
    transition: Function

    /**
     * Creates a correctly formatted migration
     */
    create: Function

    /**
     * Creates a database of the given dbname.
     */
    createDatabase: Function

    /**
     * Drops a database of the given dbname.
     */
    dropDatabase: Function

    /**
     * Sets a config variable to the given value.
     *
     * @return value
     */
    setConfigParam: Function

    /**
     * Sets the callback to the default onComplete
     */
    setDefaultCallback: Function

    /**
     * Let's the user customize the callback, which gets called after all
     * migrations have been done.
     */
    setCustomCallback: Function

    /**
     * Seeds either the static or version controlled seeders, controlled by
     * the passed mode.
     */
    seed: Function

    /**
     * Execute the down function of currently executed seeds.
     */
    undoSeed: Function

    /**
     * Execute the reset function of currently executed seeds.
     */
    resetSeed: Function

    /**
     * Executes the default routine.
     */
    run: Function
  }

  export = DBMigrate
}