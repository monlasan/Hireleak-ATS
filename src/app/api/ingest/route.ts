// import { NextRequest, NextResponse } from 'next/server';
// import { createClient } from '@/lib/supabase/server';
// import { unstable_noStore as noStore, revalidatePath } from 'next/cache';
// import { cookies } from 'next/headers';
// import { PDFLoader } from 'langchain/document_loaders/fs/pdf';
// import { OpenAIEmbeddings } from 'langchain/embeddings/openai';
// import { SupabaseVectorStore } from 'langchain/vectorstores/supabase';

// import { ChatOpenAI } from '@langchain/openai';
// import { SupabaseHybridSearch } from 'langchain/retrievers/supabase';
// import {
//   RunnablePassthrough,
//   RunnableSequence,
// } from 'langchain/schema/runnable';
// import { StringOutputParser } from 'langchain/schema/output_parser';
// import {
//   ChatPromptTemplate,
//   HumanMessagePromptTemplate,
//   SystemMessagePromptTemplate,
// } from 'langchain/prompts';
// import { formatDocumentsAsString } from 'langchain/util/document';
// import { embeddings, llm } from '@/lib/openai';
// import { sanitizeText } from '@/lib/utils';

// export async function PUT(req: NextRequest, res: NextResponse) {
//   const { query } = await req.json();

//   // return NextResponse.json({ payload: query }, { status: 200 });

//   const cookieStore = cookies();
//   const client = createClient(cookieStore);

//   const retriever = new SupabaseHybridSearch(embeddings, {
//     client,
//     //  Below are the defaults, expecting that you set up your supabase table and functions according to the guide above. Please change if necessary.
//     similarityK: 2,
//     keywordK: 2,
//     tableName: 'documents',
//     similarityQueryName: 'match_documents',
//     keywordQueryName: 'kw_match_documents',
//   });

//   const results = await retriever.getRelevantDocuments('hello bye');

//   return NextResponse.json({ payload: results }, { status: 200 });

//   return NextResponse.json({ ok: true }, { status: 200 });

//   const SYSTEM_TEMPLATE = `Use the following pieces of context to answer the question at the end.
//       If you don't know the answer, just say that you don't know, don't try to make up an answer.
//       ----------------
//       {context}`;

//   const messages = [
//     SystemMessagePromptTemplate.fromTemplate(SYSTEM_TEMPLATE),
//     HumanMessagePromptTemplate.fromTemplate('{question}'),
//   ];
//   const prompt = ChatPromptTemplate.fromMessages(messages);
//   const chain = RunnableSequence.from([
//     {
//       context: retriever.pipe(formatDocumentsAsString),
//       question: new RunnablePassthrough(),
//     },
//     prompt,
//     llm,
//     new StringOutputParser(),
//   ]);

//   const answer = await chain.invoke(query);

//   return NextResponse.json({ ok: true }, { status: 200 });
// }
// export async function POST(req: NextRequest, res: NextResponse) {
//   const cookieStore = cookies();
//   const client = createClient(cookieStore);

//   const body = await req.json();
//   const document_url = body.file_url;
//   const response = await fetch(document_url);
//   const blob = await response.blob();
//   const loader = new PDFLoader(blob);
//   const pageLevelDocs = await loader.load();
//   const sanitized_resume = sanitizeText(pageLevelDocs[0].pageContent);

//   return NextResponse.json({ payload: pageLevelDocs }, { status: 200 });

//   const vectorstore = await SupabaseVectorStore.fromDocuments(
//     pageLevelDocs,
//     embeddings,
//     {
//       client,
//       tableName: 'documents',
//       queryName: 'match_documents',
//     }
//   );

//   return NextResponse.json({ payload: 'OK' }, { status: 200 });
// }
