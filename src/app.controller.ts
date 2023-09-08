import { v4 as uuidv4 } from 'uuid';
import {
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Body,
} from '@nestjs/common';
import { ReportType, data } from './data';

@Controller('report/:type')
export class AppController {
  @Get()
  getAllReports(@Param('type') type: string) {
    const reportType =
      type === 'income' ? ReportType.INCOME : ReportType.EXPENSE;
    const reports = data.report.filter((report) => report.type === reportType);
    return reports;
  }

  @Get('/:id')
  getIcomeByID(@Param('type') type: string, @Param('id') id: string) {
    const reportType =
      type === 'icome' ? ReportType.INCOME : ReportType.EXPENSE;
    const report = data.report
      .filter((report) => report.type === reportType)
      .find((report) => report.id === id);
    return report ? report : null;
  }

  @Post()
  createReport(
    @Param('type') type: string,
    @Body() body: { amount: number; source: string },
  ) {
    const report = {
      id: uuidv4(),
      source: body.source,
      amount: body.amount,
      created_at: new Date(),
      updated_at: new Date(),
      type: type,
    };
    return report;
  }

  @Put(':/id ')
  UpdateReport(
    @Param('type') type: string,
    @Param('id') id: string,
    @Body() { source, amount }: { source: string; amount: number },
  ) {
    const reportType =
      'income' === type ? ReportType.INCOME : ReportType.EXPENSE;
    const report = data.report
      .filter((report) => report.id === reportType)
      .find((report) => report.id === id);

    report.amount = amount;
    report.source = source;

    return report;
  }

  @Delete(':/id')
  deleteIcomeReport(@Param('id') id: string, @Param('type') type: string) {
    const reportType =
      'income' === type ? ReportType.INCOME : ReportType.EXPENSE;
    const report = data.report
      .filter((report) => report.id === reportType)
      .find((report) => report.id === id);

    const index =
      report !== null || report !== undefined
        ? data.report.indexOf(report)
        : null;

    return data.report.splice(index, 1);
  }
}
