/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Subject, Person } from "@prisma/client";

export class SubjectServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.SubjectCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.SubjectCountArgs>
  ): Promise<number> {
    return this.prisma.subject.count(args);
  }

  async findMany<T extends Prisma.SubjectFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.SubjectFindManyArgs>
  ): Promise<Subject[]> {
    return this.prisma.subject.findMany(args);
  }
  async findOne<T extends Prisma.SubjectFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.SubjectFindUniqueArgs>
  ): Promise<Subject | null> {
    return this.prisma.subject.findUnique(args);
  }
  async create<T extends Prisma.SubjectCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.SubjectCreateArgs>
  ): Promise<Subject> {
    return this.prisma.subject.create<T>(args);
  }
  async update<T extends Prisma.SubjectUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.SubjectUpdateArgs>
  ): Promise<Subject> {
    return this.prisma.subject.update<T>(args);
  }
  async delete<T extends Prisma.SubjectDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.SubjectDeleteArgs>
  ): Promise<Subject> {
    return this.prisma.subject.delete(args);
  }

  async findStudents(
    parentId: string,
    args: Prisma.PersonFindManyArgs
  ): Promise<Person[]> {
    return this.prisma.subject
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .students(args);
  }
}