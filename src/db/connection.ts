import sequelize from './sequelize';

export default class Connection {

  private static _instance: Connection;

  private constructor() { }

  public static get instance(): Connection {
    if (!Connection._instance) {
      Connection._instance = new Connection();
    }
    return Connection._instance;
  }

  public async connect(force: boolean = false): Promise<void> {
    await sequelize.authenticate();
    await sequelize.sync({ force });
  }

}
