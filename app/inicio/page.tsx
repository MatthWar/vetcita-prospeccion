import { requireChatGPTUser } from '../chatgpt-auth';
import Dashboard from './dashboard';
export const dynamic = 'force-dynamic';
export default async function Inicio(){
  await requireChatGPTUser('/inicio');
  return <Dashboard/>;
}
