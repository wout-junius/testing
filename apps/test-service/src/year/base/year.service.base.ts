/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Year } from "@prisma/client";

export class YearServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.YearCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.YearCountArgs>
  ): Promise<number> {
    return this.prisma.year.count(args);
  }

  async findMany<T extends Prisma.YearFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.YearFindManyArgs>
  ): Promise<Year[]> {
    return this.prisma.year.findMany(args);
  }
  async findOne<T extends Prisma.YearFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.YearFindUniqueArgs>
  ): Promise<Year | null> {
    return this.prisma.year.findUnique(args);
  }
  async create<T extends Prisma.YearCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.YearCreateArgs>
  ): Promise<Year> {
    return this.prisma.year.create<T>(args);
  }
  async update<T extends Prisma.YearUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.YearUpdateArgs>
  ): Promise<Year> {
    return this.prisma.year.update<T>(args);
  }
  async delete<T extends Prisma.YearDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.YearDeleteArgs>
  ): Promise<Year> {
    return this.prisma.year.delete(args);
  }
}