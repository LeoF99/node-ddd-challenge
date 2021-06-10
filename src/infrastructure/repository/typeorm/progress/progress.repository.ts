// import { getConnection } from 'typeorm';

// class ProgressRepository implements IProgressRepository {
//   public async create(progress: IProgressEntity): Promise<ProgressEntity> {
//     const progressModel = ProgressModel.from(progress);

//     const createdProgress = await getConnection()
//       .getRepository(ProgressModel)
//       .save(progressModel);

//     const progressEntity = createdProgress.toProgress();

//     return progressEntity;
//   }

//   public async findById(id: number): Promise<ProgressEntity | undefined> {
//     const progressModel = await getConnection()
//       .getRepository(ProgressModel)
//       .findOne(id);

//     if (!progressModel) return undefined;

//     return progressModel.toProgress();
//   }

//   public async updateById(
//     id: number,
//     data: IProgressEntity,
//   ): Promise<ProgressEntity | undefined> {
//     const updatedModel = await getConnection()
//       .getRepository(ProgressModel)
//       .update(id, data as Partial<ProgressModel>);

//     if (!updatedModel.affected) return undefined;

//     const progressModel = ProgressModel.from({ id, ...data });
//     return progressModel.toProgress();
//   }
// }

// export default ProgressRepository;
