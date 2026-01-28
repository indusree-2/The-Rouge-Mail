import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function POST(request: Request) {
  try {
    // 1. Extract the data from the incoming request body
    const body = await request.json();
    const { content, sender_name, ink_used } = body;

    // 2. Validation: Ensure the letter isn't empty (Basic "Ink" check)
    if (!content || content.length === 0) {
      return NextResponse.json(
        { error: 'The vessel is empty. Ink is required.' },
        { status: 400 }
      );
    }

    // 3. Database Operation: Insert into your Supabase 'letters' table
    // This is the Next.js version of an SQL INSERT statement
    const { data, error } = await supabase
      .from('letters')
      .insert([
        { 
          content, 
          sender_name: sender_name || 'A Nocturnal Soul', 
          ink_used 
        },
      ])
      .select();

    if (error) throw error;

    // 4. Return success response
    return NextResponse.json({ 
      message: 'The letter has been committed to the shadows.',
      data 
    }, { status: 200 });

  } catch (error: any) {
    console.error('Rouge Mail API Error:', error.message);
    return NextResponse.json(
      { error: 'The ink failed to take. Internal server error.' },
      { status: 500 }
    );
  }
}